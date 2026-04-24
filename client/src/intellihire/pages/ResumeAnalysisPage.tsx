import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getResumeAnalysis } from "../services/resumeService";
import AnalysisCard from "../components/AnalysisCard";
import ProgressBar from "../components/ProgressBar";

export default function ResumeAnalysisPage() {
  const { id } = useParams();
  const [analysis, setAnalysis] = useState<any>(null);

  useEffect(() => {
    if (!id) return;
    getResumeAnalysis(id).then(setAnalysis).catch(console.error);
  }, [id]);

  if (!analysis)
    return <div className="pt-24 text-center text-white">Loading...</div>;

  return (
    <div className="pt-24 px-4 min-h-screen bg-gray-900 text-gray-200">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-center">Resume Analysis</h1>

        <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AnalysisCard title="Strengths" content={analysis.strengths} />
          <AnalysisCard title="Weaknesses" content={analysis.weaknesses} color="text-red-400" />
          <AnalysisCard title="Recommendations" content={analysis.recommendations} color="text-green-400" />
        </section>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">ATS Compatibility</h2>
          <ProgressBar label="ATS Score" value={analysis.atsScore} />
        </div>

      </div>
    </div>
  );
}
