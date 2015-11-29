var Datastore = require('nedb');
var db = new Datastore({ filename: './trace.db', autoload: true });
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

	get: function() {
		return new Promise(function(resolve, reject) {
			db.find({}, function(err, docs) {
				if(err) {
					reject(err);
					return;
				}
				resolve(docs);
			});
		});
	}
};