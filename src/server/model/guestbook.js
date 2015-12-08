var Datastore = require('nedb');
var db = new Datastore({ filename: './guestbook.db', autoload: true });
var Promise = require('promise');

module.exports = {
	push: function(doc) {
		return new Promise(function(resolve, reject) {
			db.insert(doc, function(err, newDoc) {
				if(err) {
					reject(err);
					return;
				}
				resolve(newDoc);
			});
		});
	},

	get: function(page, count) {
		return new Promise(function(resolve, reject) {
			db.find({})
				.sort({ regdate: -1 })
				.skip( (page-1) * count )
				.limit(count)
				.exec(function(err, docs) {
					if(err) {
						reject(err);
						return;
					}
					resolve(docs);
				});
		});
	},

	getAll: function() {
		return new Promise(function(resolve, reject) {
			db.find({})
				.sort({ regdate: -1 })
				.exec(function(err, docs) {
					if(err) {
						reject(err);
						return;
					}
					resolve(docs);
				});
		});
	}
};