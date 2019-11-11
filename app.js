const express = require("express");
const logResponseTime = require("./response-time-logger");
const app = express();

app.use(logResponseTime);

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/slow", (req, res) => {
  for (let i = 0; i < 1e10; i++) { }
  res.send("hello");
});

app.listen(3000);