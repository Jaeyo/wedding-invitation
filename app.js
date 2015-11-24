var express = require('express');
var path = require('path');
var BodyParser = require('body-parser');
var winston = require('winston');
var fs = require('fs');
var uuid = require('node-uuid');
var serialijse = require('serialijse');
var serialize = serialijse.serialize;
var deserialize = serialijse.deserialize;

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

var guestbooksDB = {
	data: [],
	push: function(guestbook) {
		this.data.push(guestbook);
		fs.writeFile('./guestbooks.db', this.data, function(err) {
			logger.error(err);
		});
	},
	get: function(startUUID, count) {
		var started = startUUID === 'top' ? true : false;
		var result = [];

		this.data.every(function(doc) {
			if(started === false) return true;

			result.push(doc);
			if(result.length >= count) return false;

			return true;
		});
		return result;
	}
};

fs.readFile('./guestbooks.db', 'utf8', function(err, data) {
	if(err) {
		if(err.errno === -4058) {
			fs.writeFile('./guestbooks.db', guestbooksDB.data, function(err) {
				if(err) logger.error(err);
			});
		}
		return;
	}

	guestbooksDB.data = deserialize(data);
});


var app = express();
app.set('port', 3000);
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

//params: startUUID, count
app.get('/data/guestbook', function(req, resp) {
	logger.info('GET, /data/guestbook');

	if(req.params.startUUID == null || req.params.count == null) {
		logger.warn('invalid params: ', req.params);
		resp.json({ error: 'invalid params' });
		return;
	}

	var result = guestbooksDB.get(req.params.startUUID, req.params.count);
	resp.json({ data: result });
});

//body: name, msg
app.post('/data/guestbook', function(req, resp) {
	logger.info('POST , /data/guestbook');

	var guestbook = {
		uuid: uuid.v4(),
		name: req.body.name,
		msg: req.body.msg,
		regdate: new Date()
	};

	if(guestbook.name == null || guestbook.msg == null) {
		logger.warn('invalid body: ', req.body);
		resp.json({ error: 'invalid body' });
		return;
	}

	guestbooksDB.push(guestbook);
	resp.json({ ok: true });
});

var server = app.listen(app.get('port'), function() {
	logger.info('server started', {
		port: app.get('port')
	});
});