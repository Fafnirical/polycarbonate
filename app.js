/*** BEGIN Requirements ***/
var express = require('express'),
	path = require('path'),
	logger = require('morgan');

var app = express();
/*** END Requirements ***/

/*** BEGIN Configuration ***/

app.use(logger('dev'));

app.use(express.static(
	path.join(__dirname, 'src')
));

app.use('/bower_components',
	express.static(__dirname + '/bower_components')
);
/*** END Configuration ***/

module.exports = app;
