var noble = require('noble');
var mongo = require('./mongodb_mod');
var eddystone = require('eddystone-beacon-scanner');

var mongoServer = 'mongodb://192.168.28.10:27017/slpf';

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning([], true);
  } else {
    noble.stopScanning();
  }
});

noble.on('discover', function(peripheral) {

  if (eddystone.isBeacon(peripheral)){
    var beacon = eddystone.parseBeacon(peripheral);
    if (beacon.type === 'tlm') {
      console.log ('found Eddystone Beacon:\n', JSON.stringify(beacon, null, 2));

      mongo.connect (mongoServer, function (db) {
      mongo.insertDocument(db, beacon.id , beacon.tlm.advCnt, beacon.rssi, function () {
        db.close();
        })
      });

    
    }
  }
    
});

console.log("Isso é um lixo qualquer");

