import { SQLDataSource } from "datasource-sql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class extends SQLDataSource {
  async greet(user) {
    return "Hello " + user.type + ", " + user.name;
  }
  async userSignUp(input) {
    input.password = await bcrypt.hash(
      input.password,
      Number(process.env.SALT)
    );
    var a = await this.knex("users").insert(input);
    return "User sign up is successful";
  }
  async userSignIn(input) {
    var user = await this.knex("users")
      .select()
      .where("emailId", input.emailId)
      .first();
    var isPassWordCorrect = bcrypt.compare(input.password, user.password);
    if (isPassWordCorrect) {
      var token = jwt.sign(user, process.env.JWT_SECRET);
      return { token };
    } else {
      throw new Error("emailId or password is incorrect");
    }
  }
  async getUsers() {
    return await this.knex("users").select();
  }
  async addBook(input, user,copies) {
    if (user.type != "admin") {
      throw new Error("Book not added. Only admins can add books");
    }
    var a = await this.knex("book").insert({
      ...input,
      copies,
      added_by: user.emailId,
    });
    return "Book added successfully";
  }
  async getBooks() {
    return await this.knex("book").select();
  }
  async getBook(Id) {
    return await this.knex("book").select().where({ Id }).first();
  }
  async editBook(input, Id, user) {
    if (user.type != "admin") {
      throw new Error("Book not added. Only admins can add books");
    }
    var a = await this.knex("book")
      .where({ Id })
      .update({ ...input, added_by: user.emailId });
    return "Book edited successfully";
  }
  async addCopies(copies, Id, user) {
    if (user.type != "admin") {
      throw new Error("Book not added. Only admins can add books");
    }
    var book =  await this.knex("book").select().where({ Id }).first();
    copies = parseInt(book.copies) + copies;
    console.log(copies);
    var a = await this.knex("book")
      .where({ Id })
      .update({ copies, added_by: user.emailId });
    return "Copies of "+book.name+" added successfully";
  }
}
