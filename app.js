var express = require('express');
var app = express();

app.disable('x-powered-by');

app.get('/', function(req, res) {
  res.status(204).send();
});

app.get('/delay', function(req, res) {
  setTimeout(function() {
    setTimeout(function() {
      setTimeout(function() {
        setTimeout(function() {
          res.status(204).send();
        }, 25);
      }, 25);
    }, 25);
  }, 25);
});

module.exports = app;
