// server/controllers/resumeController.js
import fs from "fs";
import { processResume } from "../services/resumeAIService.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const filePath = req.file.path;

    const { text, analysis } = await processResume(filePath);

    // remove local file after processing
    fs.unlinkSync(filePath);

    return res.json({
      id: Date.now(),
      text,
      analysis,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Failed to process resume",
      error: err.message,
    });
  }
};
