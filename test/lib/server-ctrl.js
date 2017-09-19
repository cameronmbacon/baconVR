module.exports = exports = {};
exports.serverUp = (server, done) => {
  if (!server.isRunning) {
    server.listen(process.env.PORT, () => {
      server.isRunning = true;
      done();
    });
    return;
  }
  done();
};

exports.serverDown = (server, done) => {
  if (server.isRunning) {
    server.close(err => {
      if (err) return done(err);
      server.isRunning = false;
      done();
    });
    return;
  }
  done();
};
