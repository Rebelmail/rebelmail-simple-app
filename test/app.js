var request = require('supertest');

var app = require('../');

describe('GET /', function() {
  it('responds with 204', function(done) {
    request(app).get('/').expect(204, done);
  });
});
