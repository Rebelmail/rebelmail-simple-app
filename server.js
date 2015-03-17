#!/usr/bin/env node

var app = require('./');

var server = app.listen(3000, function() {
  var address = this.address();
  var host = address.address;
  var port = address.port;

  console.log('Simple app listening at http://%s:%s', host, port);
});

module.exports = server;
