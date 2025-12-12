import { analyzeResumeWithAI } from "../services/resumeAIService.js";

const analysisStore = new Map(); // TEMP storage

export async function uploadResume(req, res) {
  try {
    const file = req.file;

    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const aiResult = await analyzeResumeWithAI(file.path, file.originalname);

    const id = Date.now().toString();
    analysisStore.set(id, aiResult);

    return res.json({ success: true, id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Upload failed" });
  }
}

export async function getResumeAnalysis(req, res) {
  const { id } = req.params;

  if (!analysisStore.has(id)) {
    return res.status(404).json({ error: "No analysis found" });
  }

  res.json(analysisStore.get(id));
}
