// Middleware function to log incoming requests
const requestLogger = (req, res, next) => {
  // Log the current date and time, HTTP method, and requested URL
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  next();
};

// Export the requestLogger middleware for use in other parts of the application
module.exports = requestLogger;