import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

import typeDefs from "./schema.js";
import resolvers from "./resolvers.js";

import mockDataSource from "./dataSources/mockDataSource.js";
import pasDataSource from "./dataSources/pasDataSource.js";

const knexConfig = {
  client: "sqlite3",
  connection: {
    filename:process.env.DB_FILENAME
  },
  useNullAsDefault: true
};

var datasourceObj = (process.env.DATASOURCE == "MOCK") ? new mockDataSource() : new pasDataSource(knexConfig);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    let {authorization} = req.headers;
    if (authorization) {
      const user = jwt.verify(authorization, process.env.JWT_SECRET);
      return { user }  ;
    }
  },
  dataSources: () =>  datasourceObj ,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
