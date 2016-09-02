'use strict';

const express = require('express');

const PORT = 8080;

const app = express();
app.get('/', function (req, res) {
  res.send('A response from the root\n');
});

app.listen(PORT);
console.log('Listening on http://localhost:' + PORT);
