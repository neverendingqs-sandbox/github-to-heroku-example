const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send("<h1>Hello World</h1>");
});

module.exports = app;
