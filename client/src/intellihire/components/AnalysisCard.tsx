// client/src/intellihire/components/AnalysisCard.tsx
import React from "react";

interface AnalysisCardProps {
  title: string;
  content: string[];
  color?: string; // optional gradient or color
}

export default function AnalysisCard({ title, content, color }: AnalysisCardProps) {
  return (
    <div className={`p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:shadow-2xl`}>
      <h3 className={`text-xl font-semibold mb-3 ${color || "text-blue-600 dark:text-blue-400"}`}>{title}</h3>
      <ul className="list-disc list-inside space-y-1">
        {content.map((item, idx) => (
          <li key={idx} className="text-gray-700 dark:text-gray-300">{item}</li>
        ))}
      </ul>
    </div>
  );
}
