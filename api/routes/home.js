import express from "express";
import { getIndexData } from "../controllers/home.controller.js";

const router = express.Router();

router.get("/", getIndexData);

export default router;
