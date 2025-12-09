import express from "express";
import multer from "multer";
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// 👉 Initialize Gemini with your FREE API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileBuffer = fs.readFileSync(filePath);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Send resume content to Gemini
    const result = await model.generateContent([
      {
        text: "Analyze this resume and give strengths, weaknesses, ATS score, recommendations"
      },
      {
        inlineData: {
          mimeType: "application/pdf",
          data: fileBuffer.toString("base64")
        }
      }
    ]);

    const output = result.response.text();

    res.json({ success: true, analysis: output });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "AI processing failed" });
  }
});

export default router;
