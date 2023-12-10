import { SQLDataSource } from "datasource-sql";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default class extends SQLDataSource {
  async greet(emailId) {
    var user = await this.knex("users")
      .select()
      .where("emailId", emailId)
      .first();
    return "Hello " +user.type+", "+ user.name;
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
}
