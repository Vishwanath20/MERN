// server/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import analyzeResumeRoute  from "./routes/analyzeResume.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/resume", analyzeResumeRoute );

export default app;
