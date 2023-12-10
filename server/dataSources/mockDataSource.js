import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export default class {
  users = [
    {
      name: "Sushnata Sarkar",
      emailId: "coolsushnata@gmail.com",
      password: "passWord",
    },
  ];

  greet(emailId) {
    return "Hello ";
  }

  userSignIn(input) {
    var user = this.users.find((u) => u.emailId == input.emailId);
    if (!user) {
      throw new Error("emailId or password is incorrect");
    }
    var isPassWordCorrect = input.password == user.password;
    if (isPassWordCorrect) {
      var token = jwt.sign(user, process.env.JWT_SECRET);
      return { token };
    } else {
      throw new Error("emailId or password is incorrect");
    }
  }

  getUsers() {
    return this.users;
  }
}
