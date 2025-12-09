import { analyzeResumeWithAI } from "../services/resumeAIService.js";

// upload resume
export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, error: "No file uploaded" });
    }

    // Return file ID (we use filename as ID)
    res.json({
      success: true,
      id: req.file.filename,
      message: "Resume uploaded"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Upload failed" });
  }
};


//analyze resume controller
export async function analyzeResume(req, res) {
  try {
    if (!req.file)
      return res.status(400).json({ success: false, error: "No file uploaded" });

    const aiResult = await analyzeResumeWithAI(
      req.file.path,
      req.file.originalname
    );

    return res.json({
      success: true,
      analysis: aiResult
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
