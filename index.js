'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ Sweetie: 'AWWWWWW!' });
});

app.listen(5000);
