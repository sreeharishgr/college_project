const express = require("express");
const bodyParser = require("express").json;
const morgan = require("morgan");

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/category");
const providerRoutes = require("./routes/provider");
const ratingRoutes = require("./routes/ratingRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const { authMiddleware } = require("./middleware/auth");

const app = express();
app.use(bodyParser());
app.use(morgan("dev"));

app.use("/api/category", authMiddleware, categoryRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/rating", ratingRoutes);
app.use("/api/auth", authRoutes);

// Global error handler (for multer and other errors)
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  if (err.message === "Only PDF files are allowed") {
    return res.status(400).json({ message: "Only PDF files are allowed" });
  }
  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({ message: "File too large. Max size 5MB" });
  }
  res.status(500).json({ message: "Internal Server Error" });
});

app.get("/abc", (req, res) => res.json({ ok: true }));

module.exports = app;
