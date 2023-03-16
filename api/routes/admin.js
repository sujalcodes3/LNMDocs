import express from "express";
import * as controller from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/add-data", controller.addData);

export default router;
