class ApiError extends Error {
  constructor(statusCode, message) {
    super(message); // Truyền message vào Error gốc
    this.statusCode = statusCode;
    this.name = "ApiError"; // Thêm name cho dễ debug
  }
}

module.exports = ApiError;