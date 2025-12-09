// client/src/intellihire/pages/ResumeAnalysisPage.tsx
import React from "react";
import AnalysisCard from "../components/AnalysisCard";
import ProgressBar from "../components/ProgressBar";

export default function ResumeAnalysisPage() {
  // Mock AI data
  const strengths = ["Strong JavaScript knowledge", "Experience with React & Node", "Good problem-solving"];
  const weaknesses = ["Needs improvement in system design", "Limited cloud experience"];
  const recommendations = ["Add AWS projects", "Practice mock interviews"];
  const atsScore = 82;

  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Resume Analysis</h1>

        {/* Grid for Strengths / Weaknesses / Recommendations */}
        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AnalysisCard title="Strengths" content={strengths} />
          <AnalysisCard title="Weaknesses" content={weaknesses} color="text-red-500 dark:text-red-400" />
          <AnalysisCard title="Recommendations" content={recommendations} color="text-green-600 dark:text-green-400" />
        </section>

        {/* ATS Score */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">ATS Compatibility</h2>
          <ProgressBar label="ATS Score" value={atsScore} />
        </div>

        {/* Export Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-lg font-semibold transition">
            Export PDF
          </button>
        </div>
      </div>
    </div>
  );
}
