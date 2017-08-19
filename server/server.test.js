const request = require('supertest');
const expect = require('expect');

const app = require('./server.js').app;

describe('Server', () => {
  describe('Get /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        .end(done);
    });
  });
  describe('Get /users', () => {
    it('should return my user object', (done) => {
      request(app)
      .get('/users')
      .expect(200)
      .expect((res) => {
        expect(res.body[1]).toInclude({
          name: 'Andrew',
          age: 25
        });
      })
      .end(done);
    });
  });
});
