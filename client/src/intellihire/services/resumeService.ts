// client/src/intellihire/services/resumeService.ts
import type { ResumeUploadResponse, ResumeAnalysis } from "../types/Resume";

const API_BASE = "http://localhost:5000"; // If using proxy in Vite, keep blank. Otherwise set e.g. "http://localhost:5000"

export async function uploadResume(file: File, token?: string): Promise<ResumeUploadResponse> {
  const fd = new FormData();
  fd.append("resume", file);

  const res = await fetch(`${API_BASE}/api/resume/upload`, {
    method: "POST",
    body: fd,
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(txt || "Upload failed");
  }
  return res.json();
}

export async function getResumeAnalysis(id: string, token?: string): Promise<ResumeAnalysis> {
  const res = await fetch(`${API_BASE}/api/resume/${encodeURIComponent(id)}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
  });
  if (!res.ok) {
    throw new Error("Failed to fetch analysis");
  }
  return res.json();
}
