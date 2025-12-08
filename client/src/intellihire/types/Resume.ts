// client/src/intellihire/types/Resume.ts
export type ResumeUploadResponse = { id: string };

export type ResumeAnalysis = {
  id: string;
  userId?: string;
  originalFileUrl?: string;
  extractedText?: string;
  aiScore: number;
  summary?: string;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  createdAt?: string;
};
