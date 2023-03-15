import express from "express";
import homeRoutes from "./routes/home.js";
import dataSetRoutes from "./routes/dataSet.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as dotenv from "dotenv/config";

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/home", homeRoutes);
app.use("/data", dataSetRoutes);

mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("DB WORKING");
    app.listen(8081);
  })
  .catch((err) => {
    console.log(err);
  });
