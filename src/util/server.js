var request = require('superagent');
var Promise = require('promise');

var url = {
	guestbook: '/data/guestbook',
	info: '/data/info'
};


module.exports = {
	guestbook: {
		// args: page
		get(args) {
			return new Promise(function(resolve, reject) {
				request
					.get(url.guestbook)
					.query({
						page: args.page
					}).end(function(err, resp) {
						if(err) {
							if(typeof err === 'object') err = JSON.stringify(err);
							reject(err);
							return;
						}

						if(resp.ok) {
							resolve(resp.body.data);
						} else {
							reject(resp.error)
						}
					});
			});
		}, 

		//args: name, msg
		post(args) {
			return new Promise(function(resolve, reject) {
				if(args.name == null || args.name.trim().length === 0 ||
					args.msg == null || args.msg.trim().length === 0) {
					reject({ errmsg: 'invalid args: msg' });
					return;
				}

				request
					.post(url.guestbook)
					.send({
						name: args.name,
						msg: args.msg
					}).end(function(err, resp) {
						if(err) {
							if(typeof err === 'object') err = JSON.stringify(err);
							reject(err);
							return;
						}

						if(resp.ok) {
							resolve(resp.body.data);
						} else {
							reject(resp.error);
						}
					});
			});
		}
	},
	info: {
		//args: data
		post(args) {
			request
				.get(url.info)
				.query({
					data: args.data
				})
				.end(function(err, resp) {});
		}
	}
};