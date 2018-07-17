var express = require('express')
var morgan = require('morgan');
var parser = require('body-parser');
var cors = require('cors');

var controller = require('./controllers')

var app = express();
let port = process.env.PORT || 3000;

app.set('port',port)
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan('dev'));


app.use(express.static(__dirname + '/../client/dist'))

app.get('/users')
app.post('/users')

app.get('/rooms')
app.post('/rooms')

app.get('/messages', controller.messages.get)
app.post('/messages')

app.get('/*',(req,res)=>res.redirect('/'))

app.listen(port,()=> console.log('Listening on :', port))

module.exports.app = app;