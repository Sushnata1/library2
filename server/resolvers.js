import dotenv from "dotenv";
dotenv.config();

import mockDataSource from "./dataSources/mockDataSource.js";
import pasDataSource from "./dataSources/pasDataSource.js";

var obj = (process.env.DATASOURCE=="MOCK") ? new mockDataSource() : new pasDataSource();

export default {
    Query:{
        greet: (_,__,{emailId}) => {
            return obj.greet(emailId);
        }
    },
    Mutation: {
        userSignIn: (_,{input}) => {
            return obj.userSignIn(input);
        }
    }
}