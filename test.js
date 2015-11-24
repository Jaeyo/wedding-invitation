var fs = require('fs');
var serialijse = require('serialijse');

var guestbooks = [];

fs.readFile('./guestbook.db', 'utf8', function(err, data) {
	if(err) {
		if(err.errno === -4058)
			fs.writeFile('./guestbook.db', serialijse.serialize(guestbooks), function(err) {
				if(err) console.log(err);
			});
	} else {
		guestbooks = serialijse.deserialize(data);
	}

	console.log(guestbooks);
	console.log(typeof guestbooks[0].regdate);

	console.log('size: ' + guestbooks.length);

	console.log('end');

});