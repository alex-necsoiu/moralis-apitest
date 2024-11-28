const axios = require('axios'); // Import the Axios library for making HTTP requests

class HttpClient {
  // Constructor to initialize the HttpClient with a base URL and optional headers
  constructor(baseURL, headers = {}) {
    this.client = axios.create({
      baseURL, // Set the base URL for all requests
      headers: {
        'Content-Type': 'application/json', // Default content type
        ...headers // Spread any additional headers provided
      }
    });
  }

  // Method to make an HTTP request
  async request({ method, url, data, params }) {
    try {
      const response = await this.client({
        method, // HTTP method (GET, POST, etc.)
        url, // Endpoint URL
        data, // Request body data (for POST, PUT, etc.)
        params // Query parameters
      });
      
      // Log the request details for debugging
      console.log("*** URL: " + response.url);
      console.log("*** Data: " + response.data);
      console.log("*** Params: " + response.params);

      return response.data; // Return the response data
    } catch (error) {
      throw this.handleError(error); // Handle and throw the error
    }
  }

  // Method to handle errors from HTTP requests
  handleError(error) {
    if (error.response) {
      return {
        status: error.response.status, // HTTP status code from the response
        message: error.response.data.message || 'API Error', // Error message
        data: error.response.data // Additional error data
      };
    }
    return {
      status: 500, // Default status code for unknown errors
      message: error.message, // Error message
      data: null // No additional data
    };
  }
}

module.exports = HttpClient; // Export the HttpClient class for use in other parts of the application