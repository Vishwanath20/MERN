import React, { useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

type Question = {
  question: string;
  answer: string;
  score: number;
};

export default function MockInterviewPage() {
  const [questions] = useState<Question[]>([
    { question: "Explain the JavaScript event loop.", answer: "", score: 0 },
    { question: "Describe REST vs GraphQL.", answer: "", score: 0 },
  ]);

  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswers = [...answers];
    newAnswers[current] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    // TODO: call AI evaluation API
    setTimeout(() => {
      alert("Mock interview submitted! Scores will appear in Insights.");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="pt-24 max-w-3xl mx-auto px-6 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">Mock Interview</h1>

      <Card>
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Question {current + 1}: {questions[current].question}
        </h2>
        <textarea
          value={answers[current]}
          onChange={handleAnswerChange}
          placeholder="Type your answer here..."
          className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </Card>

      <div className="flex justify-between">
        {current < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Next Question
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors disabled:opacity-50"
            disabled={loading}
          >
            {loading ? <Loader /> : "Submit Interview"}
          </button>
        )}
      </div>
    </div>
  );
}
