import dotenv from "dotenv"
dotenv.config()

import config from "./dataSources/dataSource.config.js";

import mockDataSource from "./dataSources/mockDataSource.js";
import pasDataSource from "./dataSources/pasDataSource.js";

var obj = (process.env.datasource=="MOCK") ? new mockDataSource() : new pasDataSource();

export default {
    Query:{
        greet: () => {
            return obj.greet();
        }
    }
}