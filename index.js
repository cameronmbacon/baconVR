'use strict';

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./server/models/User');
require('./server/services/passport');

mongoose.connect(process.env.MONGODB_URI);

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./server/routes/authRoutes')(app);
require('./server/routes/billingRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('server/client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
const server = (module.exports = app.listen(PORT));

server.isRunning = true;
