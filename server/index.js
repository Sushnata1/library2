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
    filename:"./dataSources/library2db.db"
  },
  useNullAsDefault: true
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    let {authorization} = req.headers;
    if (authorization) {
      const user = jwt.verify(authorization, process.env.JWT_SECRET);
      return user;
    }
  },
  dataSources: () => {
    var obj = (process.env.DATASOURCE == "MOCK") ? new mockDataSource() : new pasDataSource(knexConfig);
    return obj;
  },
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
