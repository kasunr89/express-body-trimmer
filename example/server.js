'use strict';

const express = require('express')
const expressBodyTrimmer = require('../index');
const bodyParser = 'body-parser';
const app = express();

app.use(bodyParser());
app.use(expressBodyTrimmer());

app.listen(3000, function () {
  console.log('Server runnong on :3000');
});
