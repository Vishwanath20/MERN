// server/app.js
import express from "express";
import cors from "cors";
import analyzeResumeRoute  from "./routes/analyzeResume.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/resume", analyzeResumeRoute );
app.use('/api/users', userRoutes);

// Sample root route
app.get("/", (req, res) => {
  res.send("Server is working with MongoDB 🎉");
});

export default app;
