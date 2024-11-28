const ResponseFormatter = require('../utils/responseFormatter');

const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  const formattedError = ResponseFormatter.error(err);
  res.status(formattedError.error.status).json(formattedError);
};

module.exports = errorMiddleware;