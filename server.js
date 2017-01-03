/**
 * Module dependencies
 */

const express = require('express');
const api = express();
const getNcEvents = require('./nc');
const port = process.env.PORT || 3000;


api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


api.get('/', (req, res) => {
  getNcEvents(req.query.zone).then(response => res.status(200).json(response));
});

api.listen(port, function () {
  console.log('running on localhost:3000');
});
