import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import { useResumeUpload } from "../hooks/useResumeUpload";

export default function ResumeUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const { upload, loading, error } = useResumeUpload();

  // Validate file
  const isValidFile = (f: File) => {
    const allowed = [".pdf", ".doc", ".docx"];
    const ext = f.name.toLowerCase().split(".").pop() || "";
    return allowed.includes(`.${ext}`) && f.size <= 5 * 1024 * 1024; // 5MB
  };

  const handleFile = (f?: File | null) => {
    if (!f) return;
    if (!isValidFile(f)) {
      setToast("Invalid file. Use PDF/DOC/DOCX under 5MB.");
      setFile(null);
      return;
    }
    setFile(f);
    setToast(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const f = e.dataTransfer.files?.[0];
    handleFile(f || null);
  };

  const handleUpload = async () => {
    if (!file) return;
    try {
      setProgress(15);
      const { id } = await upload(file);
      setProgress(100);
      setToast("Upload successful — analyzing resume...");
      navigate(`/intellihire/resume/${id}`);
    } catch (err: any) {
      setToast(err?.message || "Upload failed");
    } finally {
      setTimeout(() => setProgress(null), 800);
    }
  };

  return (
    <div className=" text-gray-800 dark:text-gray-200 pt-24 min-h-screen px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-300 dark:to-blue-500 
          bg-clip-text text-transparent">
            IntelliHire AI — Resume Analysis
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
            Upload your resume to get AI-powered insights & improvement suggestions.
          </p>
        </div>
        <Card className=" p-20 rounded-2xl backdrop-blur-xl  border
         border-gray-200 dark:border-gray-700 shadow-xl hover:bg-gray-100 dark:hover:bg-gray-700 ">

       
          <div
            className="rounded-xl border-2 border-dashed   p-8 text-center cursor-pointer 
                       transition-all duration-200"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            onClick={() => inputRef.current?.click()}
          >
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] || null)}
            />

            <div className="flex flex-col items-center gap-3 text-blue-600 dark:text-blue-400">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="blue"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v12m0 0l-4-4m4 4 4-4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
              </svg>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
      Drag & drop your resume
    </p>

    <p className="text-sm text-gray-600 dark:text-gray-400">
      or click to browse (PDF / DOC / DOCX, max 5MB)
    </p>

              {file && (
                <div className="mt-2 text-md font-medium ">
                  Selected: {file.name}
                </div>
              )}
            </div>
           
          </div>

          {/* Action Buttons */}
          <div className=" mt-8 flex flex-col sm:flex-row text-center items-center gap-4  dark:bg-gray-900">
            <button onClick={handleUpload} disabled={!file || loading} className=" btn btn-primary  ">
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader size={1.2} /> Analyzing...
                </span>
              ) : (
                "Analyze Resume"
              )}
            </button>


            {/* Progress Bar */}
            <div className="flex-1 w-full">
              {progress !== null && (
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-2 bg-blue-600 dark:bg-blue-400 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              )}
            </div>
          </div>

          {error && (
            <div className="mt-4 text-red-600 dark:text-red-400 text-center font-medium">
              {error}
            </div>
          )}
        </Card>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
