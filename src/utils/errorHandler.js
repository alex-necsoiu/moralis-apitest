class ErrorHandler {
  static handle(error) {
    if (error.response) {
      return {
        status: error.response.status,
        message: error.response.data.message || 'API Error',
        data: error.response.data
      };
    }
    return {
      status: 500,
      message: error.message,
      data: null
    };
  }
}

module.exports = ErrorHandler;