import dotenv from "dotenv";
dotenv.config();

export default {
    Query:{
        greet: (_, __, { emailId, dataSources }) => {
            return dataSources.greet(emailId);
        },
        users: (_,__,{dataSources}) => {
            return dataSources.getUsers();
        }
    },
    Mutation: {
        userSignIn: (_,{input},{dataSources}) => {
            return dataSources.userSignIn(input);
        },
        userSignUp: (_, { input }, { dataSources }) => {
            return dataSources.userSignUp(input);
        }
    }
}