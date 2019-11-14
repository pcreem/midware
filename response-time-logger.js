// response-time-logger.js
function logResponseTime(req, res, next) {
  var start = Date()
  const startHrTime = process.hrtime();

  res.on("finish", () => {
    const elapsedHrTime = process.hrtime(startHrTime);
    const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
    var fullUrl = req.method + ' from ' + req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(start, " | ", fullUrl, " | total time", elapsedTimeInMs, "ms");
  });

  next();
}

module.exports = logResponseTime;
