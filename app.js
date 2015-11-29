var express = require('express');
var path = require('path');
var BodyParser = require('body-parser');
var winston = require('winston');
var uuid = require('node-uuid');
var GuestBookModel = require('./src/server/model/guestbook.js');
var TraceModel = require('./src/server/model/trace.js');

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


app.get('/admin', function(req, resp) {
	logger.info('GET, /admin', req.query);
	resp.sendFile(path.join(__dirname, '/public/admin.html'));
});

//query: page
app.get('/data/guestbook', function(req, resp) {
	logger.info('GET, /data/guestbook', req.query);

	if(req.query.page == null) {
		logger.warn('invalid params: ', req.query);
		resp.json({ error: 'invalid params' });
		return;
	}

	GuestBookModel.get(req.query.page, 10)
		.then(function(docs) {
			resp.json({ ok: true, data: docs });
		}).catch(function(err) {
			logger.error(err);
			resp.json({ ok: false, error: err });
		});
});

//query: data
app.get('/data/info', function(req, resp) {
	logger.info('GET, /data/info', req.query);
	resp.json({ ok: true });
	TraceModel.push({
		regdate: new Date(),
		ip: req.ip,
		data: req.query.data
	});
});

//body: name, msg
app.post('/data/guestbook', function(req, resp) {
	logger.info('POST , /data/guestbook', req.body);

	var guestbook = {
		uuid: uuid.v4(),
		name: req.body.name,
		msg: req.body.msg,
		ip: req.ip,
		regdate: new Date()
	};

	if(guestbook.name == null || guestbook.msg == null) {
		logger.warn('invalid body: ', req.body);
		resp.json({ error: 'invalid body' });
		return;
	}

	GuestBookModel.push(guestbook)
		.then(function(doc) {
			resp.json({ ok: true });
		}).catch(function(err) {
			resp.json({ ok: false, error: err });
		});
});



var server = app.listen(app.get('port'), function() {
	logger.info('server started', {
		port: app.get('port')
	});
});