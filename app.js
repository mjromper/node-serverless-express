var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var app = express();

const root = './client';

app.use(bodyParser.json());

app.use(express.static( path.resolve(__dirname, root)));
app.use("/bower_components", express.static(path.resolve(__dirname, './wwwroot/npm'), { maxAge: 86400000*7 }));

app.get('/api/hello', function(req, res) {
  res.json({
    "method": 'get /api/hello',
    "query": req.query,
    "body": req.body
  });
});

app.post('/api/hello', function(req, res) {
  res.json({
    "method": 'post /api/hello',
    "query": req.query,
    "body": req.body
  });
});

app.get('/api/ping', function(req, res) {
  res.json({
    "method": 'get /api/ping',
    "query": req.query,
    "body": req.body
  });
});

app.get('/api/pong/get', function(req, res) {
  res.send({
    "method": 'get /api/pong/get',
    "query": req.query,
    "body": req.body
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
