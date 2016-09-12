var express = require('express');
var app = express();
var path = require('path');
var config = require('./config.js');
var colors = require('colors');


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/../public/index.html'));
});

app.get('/item', function (req, res) {
	res.sendFile(path.join(__dirname+'/../public/item.html'));
});


app.use(express.static('public'));


app.listen(config.host, function () {
	console.log('______________');
	console.log('App is running.');
	console.log(colors.green('http://localhost:' + config.host + '/'));
	console.log('______________');
});
