'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ Sweetie: 'I love you!' });
});

app.listen(PORT);
module.exports.app = app;
