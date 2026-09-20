// app.js

import express from "express";
import cors from "cors";

import enquiryRoutes from "./routes/enquiryRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

app.use(express.json({ limit: "10kb" }));

// Health check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Visa consultancy API is running",
  });
});

// Enquiry routes
app.use("/api/enquiries", enquiryRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

export default app;
