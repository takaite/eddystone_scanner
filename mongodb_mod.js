var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

exports.insertDocument = function(db, x_addr, u_count, i_rssi, callback) {
  // Get the documents collection
  var collection = db.collection('beacons');
  // Insert some documents
  collection.insert({rssi : i_rssi, addr : x_addr, count : u_count}, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log ("Length: " + result.ops.length);
    //assert.equal(1, result.ops.length);
    console.log("Inserted 1 document into the collection");
    callback(result);
  });
}

exports.connect = function (url, callback) {
// Use connect method to connect to the server
  try {
  MongoClient.connect(url, function(err, db) {
  //assert.equal(null, err);
  if (err) {
    console.log ('Fail on db connection: ', err.message);
  }
  else {
    console.log("Connected successfully to server");
    callback(db);
  }
  });
      }
      catch (err) {
	console.log ('Unable to post to db: ', err.message);
      }
}
// Connection URL
exports.url = 'mongodb://192.168.28.10:27017/slpf';

/*
this.connect (this.url, function (db) {
  this.insertDocument(db, 0x12345678, 10, -30, function () {
      db.close();
    })
  }
);
*/
