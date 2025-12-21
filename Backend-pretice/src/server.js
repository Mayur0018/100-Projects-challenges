import express from "express";
import dotenv from "dotenv";
import movieRouter from "./routes/moviesRoutes.js";
import { connectDB, disconnectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/movies", movieRouter);
app.use("/auth",authRoutes);
app.use("/login",authRoutes)
app.use("/logout",authRoutes)
const PORT = process.env.PORT || 5000;

let server;

// Start server only after DB connection
const startServer = async () => {
  try {
    await connectDB();

    server = app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();


// 🔴 Handle unhandled promise rejections
process.on("unhandledRejection", async (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);

  try {
    await disconnectDB();
    server?.close(() => {
      process.exit(1);
    });
  } catch (err) {
    process.exit(1);
  }
});

// 🔴 Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);

  try {
    await disconnectDB();
  } finally {
    process.exit(1);
  }
});

// 🟢 Graceful shutdown (CTRL+C / kill)
process.on("SIGINT", async () => {
  console.log("SIGINT received. Shutting down gracefully...");
  await disconnectDB();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Shutting down gracefully...");
  await disconnectDB();
  process.exit(0);
});
