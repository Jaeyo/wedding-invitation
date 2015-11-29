var Datastore = require('nedb');
var db = new Datastore({ filename: './guestbook.db', autoload: true });

// db.remove({}, {}, function(err, numRemoved) {
// 	console.log('remove', { err: err, numRemoved: numRemoved });
// });


// for(var i=0; i<100; i++) {
// 	var doc = {
// 		index: i,
// 		msg: 'msg from ' + i
// 	};

// 	db.insert(doc, function(err, newDoc) {
// 		if(err) console.log(err);
// 	});
// }

db.find({}).sort({ index: 1 }).skip(40).limit(10).exec(function(err, docs) {
	console.log(docs);
});

console.log('end');