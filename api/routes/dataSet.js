import express from "express";
import * as controllers from "../controllers/dataSet.controller.js";

const router = express.Router();

router.post("/add-data", controllers.addData);
router.get("/data", controllers.getData);
router.get("/subjects", controllers.getSubjects);
router.post("/add-link/:subject/:type", controllers.addLink);
router.get("/get-link/:subject/:type/:year", controllers.getLink);

export default router;
