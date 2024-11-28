class ResponseFormatter {
  static success(data) {
    return {
      success: true,
      data,
      timestamp: new Date().toISOString()
    };
  }

  static error(error) {
    return {
      success: false,
      error: {
        message: error.message,
        status: error.status || 500
      },
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = ResponseFormatter;