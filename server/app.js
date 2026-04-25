import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// ... existing middleware ...

// Serve React static files
app.use(express.static(path.join(__dirname, "../client/dist")));

// Your API routes here
// app.use("/api", routes);

// Catch-all: serve index.html for React Router
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

export default app;