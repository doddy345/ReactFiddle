var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname)))

// Listen for requests
var server = app.listen(8000);
