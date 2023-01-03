import express from "express";
import homeRoutes from "./routes/home.js";
import mongoose from "mongoose";

const app = express();

app.use("/home", homeRoutes);

mongoose
  .connect(
    "mongodb+srv://ScrewedUP:Harshojhalnm@cluster0.dujluvf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((result) => {
    console.log("DB WORKING");
    app.listen(8080);
  })
  .catch((err) => {
    console.log(err);
  });
