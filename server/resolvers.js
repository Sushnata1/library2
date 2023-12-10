import dotenv from "dotenv";
dotenv.config();

export default {
    Query:{
        greet: (_, __, { user, dataSources }) => {
            return dataSources.greet(user);
        },
        users: (_,__,{dataSources}) => {
            return dataSources.getUsers();
        },
        books: (_, __, { dataSources }) => {
            return dataSources.getBooks();
        },
        book: (_, {Id}, { dataSources }) => {
            return dataSources.getBook(Id);
        }
    },
    Mutation: {
        userSignIn: (_,{input},{dataSources}) => {
            return dataSources.userSignIn(input);
        },
        userSignUp: (_, { input }, { dataSources }) => {
            return dataSources.userSignUp(input);
        },
        addBook: (_, { input,copies }, { user, dataSources }) => {
            return dataSources.addBook(input,user,copies);
        },
        editBook: (_, { input, Id }, { user, dataSources }) => {
            return dataSources.editBook(input, Id, user);
        },
        addCopies: (_, { copies, Id }, { user, dataSources }) => {
            return dataSources.addCopies(copies, Id, user);
        }
    }
}