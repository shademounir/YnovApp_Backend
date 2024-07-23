const admin = require('firebase-admin');

const serviceAccount = require('./admin.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // replace with your Firebase database URL
  storageBucket: "lapelota-93e25.appspot.com", 
  /*databaseURL: "lapelota-93e25.firebaseio.com",*/
});

module.exports = admin;



