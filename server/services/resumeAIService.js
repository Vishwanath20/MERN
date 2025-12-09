// server/services/resumeAIService.js
import pdfParse from "pdf-parse";
import fs from "fs";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Extract text from PDF
async function extractPDFText(filePath) {
  const buffer = fs.readFileSync(filePath);
  const data = await pdfParse(buffer);
  return data.text;
}

// TODO: Add DOC/DOCX extraction later
export async function analyzeResumeAI(text) {
  const prompt = `
    Analyze the following resume text and return JSON ONLY.
    Structure:
    {
      "strengths": [...],
      "weaknesses": [...],
      "atsScore": number (0-100),
      "recommendations": [...],
      "summary": "short summary"
    }
    Resume text:
    ${text}
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [{ role: "user", content: prompt }],
  });

  return JSON.parse(response.choices[0].message.content);
}

export async function processResume(filePath) {
  const text = await extractPDFText(filePath);
  const analysis = await analyzeResumeAI(text);

  return { text, analysis };
}
