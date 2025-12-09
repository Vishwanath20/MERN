// client/src/intellihire/components/ProgressBar.tsx
import React from "react";

interface ProgressBarProps {
  label: string;
  value: number; // 0-100
}

export default function ProgressBar({ label, value }: ProgressBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 bg-blue-600 dark:bg-blue-400 transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
