require('./lib/test-env');
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;
const mongoose = require('mongoose');
const Promise = require('bluebird');
const serverCtrl = require('./lib/server-ctrl');
const cleanDB = require('./lib/clean-db');
const server = require('../index');
const User = require('../models/User');

mongoose.Promise = Promise;

const testUser = {
  googleId: 'asdf4312hjkl',
  credits: 0
};

describe('testing auth-router', function() {
  before(done => serverCtrl.serverUp(server, done));
  after(done => serverCtrl.serverDown(server, done));
  afterEach(done => cleanDB(done));
  describe('#GET /api/current_user', function() {
    describe('with user logged in', function() {
      before(() => new User(testUser).save());
      it('should return a User object', done => {
        request(server)
          .get('/api/current_user')
          .expect(200, done);
      });
    });
  });
});
