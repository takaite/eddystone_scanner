var EddystoneBeaconScanner = require('eddystone-beacon-scanner');
var mongo = require('./mongodb_mod');

var mongoServer = 'mongodb://192.168.28.10:27017/slpf';


var checkAndLogTLM = function (beacon) {
  if (beacon.type === 'tlm') {
    
  }

}
EddystoneBeaconScanner.on('found', function(beacon) {
  console.log('found Eddystone Beacon:\n', JSON.stringify(beacon, null, 2));
  if (beacon.type == 'tlm') {
    
  }
});

EddystoneBeaconScanner.on('updated', function(beacon) {
  console.log('updated Eddystone Beacon:\n', JSON.stringify(beacon, null, 2));
});

//EddystoneBeaconScanner.on('lost', function(beacon) {
//  console.log('lost Eddystone beacon:\n', JSON.stringify(beacon, null, 2));
//});

EddystoneBeaconScanner.startScanning(true);
