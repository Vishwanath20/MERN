import { useState } from "react";
import { uploadResume } from "../services/resumeService";

export function useResumeUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function upload(file: File) {
    try {
      setLoading(true);
      setError(null);

      const result = await uploadResume(file);
      return result; // { success: true, id: "123" }
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { upload, loading, error };
}
