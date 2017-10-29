/*
  cd ~/eddystone
  npm install eddystone-beacon
  node eddystone.js
*/

EB = require('eddystone-beacon');
EB.advertiseUrl('http://10.0.60.29:8080/');
