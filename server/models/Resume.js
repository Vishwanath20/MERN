import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    fileName: String,
    filePath: String,
    analysis: {
      strengths: [String],
      weaknesses: [String],
      recommendations: [String],
      atsScore: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Resume", ResumeSchema);
