import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async () => {
  try {
    console.log(`db connection link : ${process.env.MONGODB_URI}/${DB_NAME}`);
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "\n MongoDB connected | DB HOST : ",
      connectionResponse.connection.host
    );
  } catch (error) {
    console.error("dbConnectFile | MongoDB Connection Error", error);
    process.exit(1);
  }
};

export default dbConnect;

/* 
mongodb is connected via 2 methods 

1. IIFE direct code in index page
2. separate db connect file
*/

// IIFE Code should be written on index page

/*

import express from "express";

const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on PORT  ${process.env.PORT}.`);
    });
  } catch (error) {
    console.error("Connection Function ERROR ", error);

    throw error;
  }
})();


*/
