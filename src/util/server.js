var request = require('superagent');
var Promise = require('promise');

var url = {
	guestbook: '/data/guestbook'
};

module.exports = {
	guestbook: {
		// args: startKey, count
		get(args) {
			if(args.startKey == null) args.startKey = 'top';

			return new Promise(function(resolve, reject) {
				request
					.get(url.guestbook)
					.query({
						startKey: args.startKey,
						count: args.count
					}).end(function(resp) {
						if(resp.ok) {
							resolve(resp.body);
						} else {
							reject(resp.error)
						}
					});
			});
		}, 

		//args: name, msg
		post(args) {
			return new Promise(function(resolve, reject) {
				if(args.contents == null || args.contents.trim().length === 0) {
					reject({ errmsg: 'invalid args: msg' });
					return;
				}

				request
					.post(url.guestbook)
					.send({
						name: args.name,
						msg: args.msg
					}).end(function(resp) {
						if(resp.ok) {
							resolve(resp.body);
						} else {
							reject(resp.error);
						}
					});
			});
		}
	}
};