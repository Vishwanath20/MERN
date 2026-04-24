import api from "../../utils/api";

export async function uploadResume(file: File) {
  const fd = new FormData();
  fd.append("resume", file);

  const res = await api.post("/resume/upload", fd, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
}

export async function getResumeAnalysis(id: string) {
  const res = await api.get(`/resume/${id}`);
  return res.data;
}
