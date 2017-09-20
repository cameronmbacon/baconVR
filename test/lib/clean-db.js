const Promise = require('bluebird');
const User = require('../../models/User');

module.exports = done => {
  Promise.all([User.remove({})])
    .then(() => done())
    .catch(done);
};
