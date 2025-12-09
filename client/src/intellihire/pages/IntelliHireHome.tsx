import { Link } from "react-router-dom";

export default function IntelliHireHome() {
  return (
    <div className="pt-24 max-w-7xl mx-auto px-6">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Welcome to IntelliHire AI
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          AI-powered resume analysis and mock interviews to accelerate your career.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 text-gray-800 dark:text-gray-200">
          <Link
            to="/intellihire/resume-upload"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700  rounded-lg font-semibold transition-colors"
          >
            Upload Resume
          </Link>
          <Link
            to="/intellihire/mock-interview"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700  rounded-lg font-semibold transition-colors"
          >
            Start Mock Interview
          </Link>
        </div>
      </section>


      {/* Features Section */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-16">
        <div className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          <h3 className="text-xl font-semibold mb-2 ">
            Resume Analysis
          </h3>

          <p className="">
            Get AI-driven feedback on strengths, weaknesses, and ATS compatibility.
          </p>
        </div>
      </section>



    </div>
  );
}
