var express = require('express');
var path = require("path");
var app = express();

const root = './client';

app.use(express.static( path.resolve(__dirname, root)));
app.use("/bower_components", express.static(path.resolve(__dirname, 'wwwroot','npm'), { maxAge: 86400000*7 }));

app.get('/api/hello', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});

app.post('/api/hello', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
