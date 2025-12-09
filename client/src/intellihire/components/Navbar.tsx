// client/src/intellihire/components/Navbar.tsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function IHNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/intellihire" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          IntelliHire AI
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/intellihire/resume" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
            Resume
          </Link>
          <Link to="/intellihire/mock-interview" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
            Mock Interview
          </Link>
          <Link to="/intellihire/insights" className="text-gray-700 dark:text-gray-200 hover:text-blue-500">
            Insights
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setOpen((s) => !s)}>
          <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4">
          <Link to="/intellihire/resume" className="block py-2 text-gray-700 dark:text-gray-200">Resume</Link>
          <Link to="/intellihire/mock-interview" className="block py-2 text-gray-700 dark:text-gray-200">Mock Interview</Link>
          <Link to="/intellihire/insights" className="block py-2 text-gray-700 dark:text-gray-200">Insights</Link>
        </div>
      )}
    </header>
  );
}
