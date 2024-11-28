const axios = require('axios');

class HttpClient {
  constructor(baseURL, headers = {}) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });
  }

  async request({ method, url, data, params }) {
    try {
      const response = await this.client({
        method,
        url,
        data,
        params
      });
      console.log("*** URL: "+response.url)
      console.log("*** URL: "+response.data)
      console.log("*** URL: "+response.params)

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
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

module.exports = HttpClient;