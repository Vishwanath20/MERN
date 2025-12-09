import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { analyzeResume } from "../controllers/resumeController.js";

const router = express.Router();

//router.post("/analyze", upload.single("resume"), analyzeResume);

router.get("/:id", analyzeResume);

router.post("/upload", upload.single("resume"), uploadResume);

export default router;
