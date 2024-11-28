class ErrorHandler {
  // Method to handle errors and format them for consistent responses
  static handle(error) {
    if (error.response) {
      return {
        status: error.response.status, // HTTP status code from the response
        message: error.response.data.message || 'API Error', // Error message or default
        data: error.response.data // Additional error data from the response
      };
    }
    return {
      status: 500, // Default status code for unknown errors
      message: error.message, // Error message
      data: null // No additional data for unknown errors
    };
  }
}

module.exports = ErrorHandler; // Export the ErrorHandler class for use in other parts of the application