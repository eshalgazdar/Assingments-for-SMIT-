const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Not Found - Route ${req.originalUrl} does not exist`
  });
};

module.exports = notFound;