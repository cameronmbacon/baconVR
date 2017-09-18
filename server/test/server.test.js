'use strict';

const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const app = require('../server').app;

describe('Server', () => {
  describe('#GET /', () => {
    it('should return status code 200', done => {
      request(app)
        .get('/')
        .expect(res => {
          expect(res.status).to.equal(200);
        })
        .end(done);
    });

    it("should return {Sweetie: 'I love you!'}", done => {
      request(app)
        .get('/')
        .expect(res => {
          expect(res.body).to.include({ Sweetie: 'I love you!' });
        })
        .end(done);
    });
  });
});
