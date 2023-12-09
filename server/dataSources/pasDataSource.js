import { SQLDataSource } from "datasource-sql";
import bcrypt from "bcrypt";

export default class extends SQLDataSource {
  greet() {
    return "hello pas";
  }
    async userSignUp(input) {
        input.password =await bcrypt.hash(input.password, (Number)(process.env.SALT));
        var a = await this.knex("users").insert(input);
        return "User sign up is successful";
  }
}
