const ResponseFormatter = require('../utils/responseFormatter'); // Import utility for formatting error responses

// Middleware function to handle errors
const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack); // Log the error stack trace for debugging
  const formattedError = ResponseFormatter.error(err); // Format the error response
  res.status(formattedError.error.status).json(formattedError); // Send the formatted error response with the appropriate status code
};

module.exports = errorMiddleware; // Export the error middleware for use in the application