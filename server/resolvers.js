import dotenv from "dotenv";
dotenv.config();

import mockDataSource from "./dataSources/mockDataSource.js";
import pasDataSource from "./dataSources/pasDataSource.js";

let config = process.env;

const knexConfig = {
  client: 'sqlite3',//"pg",
  connection: {
      filename: 'dataSources/library2db.db'
    /*
    host: config["DB_HOST"],
    port: config["DB_PORT"],
    user: config["DB_USER"],
    database: config["DB_NAME"],
    password: config["DB_PASSWORD"],
    */
  },
  //useNullAsDefault: true,
};

var dataSources =
  process.env.DATASOURCE == "MOCK"
    ? new mockDataSource()
    : new pasDataSource(knexConfig);

export default {
    Query:{
        greet: (_, __, { user }) => {
            return dataSources.greet(user);
        },
        users: () => {
            return dataSources.getUsers();
        },
        books: () => {
            return dataSources.getBooks();
        },
        book: (_, {Id}) => {
            return dataSources.getBook(Id);
        }
    },
    Mutation: {
        userSignIn: (_,{input}) => {
            return dataSources.userSignIn(input);
        },
        userSignUp: (_, { input }) => {
            return dataSources.userSignUp(input);
        },
        addBook: (_, { input,copies }, { user}) => {
            return dataSources.addBook(input,user,copies);
        },
        editBook: (_, { input, Id }, { user }) => {
            return dataSources.editBook(input, id, user);
        },
        addCopies: (_, { copies, Id }, { user}) => {
            return dataSources.addCopies(copies, id, user);
        }
    }
}