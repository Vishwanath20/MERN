// client/src/intellihire/hooks/useResumeUpload.ts
import { useState } from "react";
import type { ResumeUploadResponse } from "../types/Resume";
import { uploadResume } from "../services/resumeService";

export function useResumeUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const upload = async (file: File, token?: string): Promise<ResumeUploadResponse> => {
    setLoading(true);
    setError(null);
    try {
      const result = await uploadResume(file, token);
      return result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      setError(err?.message || "Upload failed");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { upload, loading, error };
}
