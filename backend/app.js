import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import enquiryRoutes from "./routes/enquiry.routes.js";
import careerRoutes from "./routes/career.routes.js";
import { env } from "./config/env.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

// Ensure uploads directory
const uploadDir = path.join(process.cwd(), "src", "uploads", "resumes");
fs.mkdirSync(uploadDir, { recursive: true });

// Middlewares
app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/careers", careerRoutes);

// Health Check
app.get("/api/health", (_, res) => {
  res.json({ status: "OK", time: new Date() });
});

// Error Handler
app.use(errorHandler);

export default app;
