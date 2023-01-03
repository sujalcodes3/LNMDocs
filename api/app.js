import express from "express";
import homeRoutes from "./routes/home.js";

const app = express();

app.use("/home", homeRoutes);

app.listen(8080);
