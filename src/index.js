import express from "express";
import connectDB from "./db/index.js";

const app = express();

const PORT = process.env.PORT || 8000;

// connect DB first, then start server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("App failed to start:", err.message);
  });
