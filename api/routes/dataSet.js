import express from "express";
import * as controllers from "../controllers/dataSet.controller.js";

const router = express.Router();

router.post("/addData", controllers.addData);
router.get("/getData", controllers.getData);

export default router;

