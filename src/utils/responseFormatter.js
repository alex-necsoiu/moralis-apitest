class ResponseFormatter {
  // Method to format a successful response
  static success(data) {
    return {
      success: true, // Indicates the response was successful
      data, // The data to be returned
      timestamp: new Date().toISOString() // Current timestamp in ISO format
    };
  }

  // Method to format an error response
  static error(error) {
    return {
      success: false, // Indicates the response was unsuccessful
      error: {
        message: error.message, // Error message to be returned
        status: error.status || 500 // HTTP status code, defaulting to 500 if not provided
      },
      timestamp: new Date().toISOString() // Current timestamp in ISO format
    };
  }
}

module.exports = ResponseFormatter; // Export the ResponseFormatter class for use in other parts of the application