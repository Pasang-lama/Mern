const express = require("express");
const app = express();

app.post("/login", (req, res) => {
  res.json({
    status: true,
    result: "login pages",
    message: "this is login pages",
    meta: null,
  });
});

app.post("/register", (req, res) => {
  res.json({
    status: true,
    result: "resgister pages",
    message: "this is register pages",
    meta: null,
  });
});

module.exports = app;
