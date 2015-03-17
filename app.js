var express = require('express');
var app = express();

app.disable('x-powered-by');

app.get('/', function(req, res) {
  res.status(204).send();
});

module.exports = app;
