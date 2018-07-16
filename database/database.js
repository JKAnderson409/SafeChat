const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

mongoonse.promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to database!');
});

let users = mongoose.Schema({
  id: Number, //primary
  name: String,
  password: String,
  totalscore: Number
});


let Rooms = mongoose.Schema({
  roomId: Number, 
  roomName: String,
  id: Number //foreign id

});

let Messages = mongoose.Schema({
  roomId: Number, //foreign
  roomName: String,
  text: String,
  score: Number
  
});

