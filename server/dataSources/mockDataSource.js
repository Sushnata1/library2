import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv"
dotenv.config()

export default class {

    users = [{
        name: "Sushnata Sarkar",
        emailId: "coolsushnata@gmail.com",
        password: "passWord"
    }]

    greet(emailId) {
        console.log(emailId);
        var user = this.users.find((u) => u.emailId == emailId );
        return "Hello " + user.name;
    }

    async userSignIn(input) {
        var user = this.users.find((u) => u.emailId == input.emailId);
        var isPassWordCorrect = input.password == user.password;
        if (isPassWordCorrect) {
            var token = jwt.sign(user, process.env.JWT_SECRET);
            return {token};
        }
        else {
            throw new Error("emailId or password is incorrect");
        }
    }
}