import express from "express";
import * as controllers from "../controllers/dataSet.controller.js";

const router = express.Router();

router.post("/add-data", controllers.addData);
router.get("/data", controllers.getData);
router.get("/subjects", controllers.getSubjects);

export default router;
