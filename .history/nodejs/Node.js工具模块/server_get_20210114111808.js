var express = require('express');
var app = express();

app.use('/public', express.static('public'));
