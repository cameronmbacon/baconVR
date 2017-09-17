'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ Sweetie: 'I love you!' });
});

app.listen(5000);
