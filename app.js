const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error"); 

const app = express();

const contactsRouter = require("./app/routes/contact.route");

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});
app.use("/api/contacts", contactsRouter);

// Xử lý lỗi 404 (không tìm thấy route)
app.use((req, res, next) => {
  // Nếu không khớp route nào ở trên
  return next(new ApiError(404, "Resource not found"));
});


// Middleware xử lý lỗi tập trung
app.use((error, req, res, next) => {
  return res.status(error.statusCode || 500).json({
    message: error.message || "Internal Server Error",
  });
});

module.exports = app;
