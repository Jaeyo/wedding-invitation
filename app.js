var express = require('express');
var path = require('path');
var BodyParser = require('body-parser');
var winston = require('winston');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({
			level: 'debug', 
			colorize: true,
			timestamp: true,
			prettyPrint: true
		}),
		new (winston.transports.File)({
			level: 'debug',
			json: false,
			colorize: false,
			timestamp: true,
			prettyPrint: true,
			filename: 'log.txt',
			maxsize: 5242880,
			maxFiles: 5
		})
	]
});

var app = express();
app.set('port', 3000);
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/rest/guestbook', function(req, resp) {
	//TODO IMME
});

app.post('/rest/guestbook', function(req, resp) {
	//TODO IMME
});

var server = app.listen(app.get('port'), function() {
	logger.info('server started', {
		port: app.get('port')
	});
});