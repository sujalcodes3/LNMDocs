import express from "express";
import { getIndexData, postIndexData } from "../controllers/home.controller.js";

const router = express.Router();

router.get("/", getIndexData);
router.post("/", postIndexData);

export default router;
