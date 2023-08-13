const ErrorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).join({
    success: false,
    message: arr.message,
  });
};
export default ErrorMiddleware;
