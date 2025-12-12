// server/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import resumeRoutes  from "./routes/resumeRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// Core Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/resume", resumeRoutes );
app.use("/api/users", userRoutes);

// Sample root route
app.get("/", (req, res) => {
  res.send("Server is working with MongoDB 🎉");
});

export default app;
