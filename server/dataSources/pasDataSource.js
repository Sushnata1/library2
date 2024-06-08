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
      Number(process.env.SALT),
    );
    var a = await this.knex("users").insert(input);
    return "User sign up is successful";
  }
  async userSignIn(input) {
    var user = await this.knex("users")
      .select()
      .where("emailid", input.emailid)
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
    let result = await this.knex("users").select();
    return result;
  }
  async addBook(input, user, copies) {
    if (user.type != "admin") {
      throw new Error("Book not added. Only admins can add books");
    }
    var a = await this.knex("book").insert({
      ...input,
      copies,
      added_by: user.emailid,
    });
    return "Book added successfully";
  }
  async getBooks() {
    let b = await this.knex("book").select();
    console.log(b);
    return b; //await this.knex("books").select();
  }
  async getBook(id) {
    return await this.knex("book").select().where({ id }).first();
  }
  async editBook(input, id, user) {
    if (user.type != "admin") {
      throw new Error("Book not added. Only admins can add books");
    }
    var a = await this.knex("book")
      .where({ id })
      .update({ ...input, added_by: user.emailid });
    return "Book edited successfully";
  }
  async addCopies(copies, Id, user) {
    if (user.type != "admin") {
      throw new Error("Book not added. Only admins can add books");
    }
    var book = await this.knex("book").select().where({ Id }).first();
    copies = parseInt(book.copies) + copies;
    console.log(copies);
    var a = await this.knex("book")
      .where({ id })
      .update({ copies, added_by: user.emailId });
    return "Copies of " + book.name + " added successfully";
  }
}
