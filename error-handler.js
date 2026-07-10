function errorHandler(err, req, res, next) {
  console.error(err.stack || err.message);

  if (err.name === 'MulterError') {
    return res.status(400).json({ success: false, message: err.message });
  }

  if (err.message && err.message.includes('Only image files')) {
    return res.status(400).json({ success: false, message: err.message });
  }

  return res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Something went wrong on the server.'
  });
}

module.exports = errorHandler;
