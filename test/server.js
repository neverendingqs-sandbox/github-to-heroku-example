const assert = require('chai').assert;
const request = require('supertest');

const app = require('../src/server');

describe('GET /', function() {
  it('returns hello world', function(done) {
    request(app)
      .get("/")
      .expect(200)
      .expect("<h1>Hello World</h1>", done);
  });
});
