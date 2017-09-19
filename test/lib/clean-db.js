const Promise = require('bluebird');
const User = require('../../server/models/User');

module.exports = done => {
  Promise.all([User.remove({})])
    .then(() => done())
    .catch(done);
};
