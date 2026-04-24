import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeResumeWithAI(filePath, originalName) {
  try {
    const ext = path.extname(originalName).toLowerCase();
    const fileBuffer = fs.readFileSync(filePath);

    const mimeType =
      ext === ".pdf"
        ? "application/pdf"
        : ext === ".doc"
        ? "application/msword"
        : ext === ".docx"
        ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        : null;

    if (!mimeType) throw new Error("Unsupported file type");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
Extract resume insights. Return ONLY JSON:

{
  "atsScore": number,
  "strengths": [],
  "weaknesses": [],
  "recommendations": [],
  "jobFitSummary": ""
}
    `;

    const result = await model.generateContent([
      { text: prompt },
      {
        inlineData: {
          mimeType,
          data: fileBuffer.toString("base64"),
        },
      },
    ]);

    let text = result.response.text();
    text = text.replace(/```json|```/g, "").trim();

    return JSON.parse(text);
  } catch (err) {
    console.error("AI Error:", err);
    throw new Error("AI processing failed");
  } finally {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
}
