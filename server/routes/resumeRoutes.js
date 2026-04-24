import express from "express";
import upload from "../middleware/uploadMiddleware.js";
import { getResumeAnalysis, uploadResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/upload", upload.single("resume"), uploadResume);
router.get("/:id", getResumeAnalysis);

export default router;
