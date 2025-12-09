import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeResumeWithAI(filePath, originalName) {
  try {
    const ext = path.extname(originalName).toLowerCase();

    const mimeType =
      ext === ".pdf"
        ? "application/pdf"
        : ext === ".doc"
        ? "application/msword"
        : ext === ".docx"
        ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        : null;

    if (!mimeType) throw new Error("Unsupported file type");

    const fileBuffer = fs.readFileSync(filePath);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = `
You are an AI Resume Reviewer. Return ONLY the following JSON:

{
  "ats_score": number,
  "strengths": [],
  "weaknesses": [],
  "recommendations": [],
  "job_fit_summary": ""
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
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("AI Resume Analysis Error:", error);
    throw new Error("AI processing failed");
  } finally {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
}
