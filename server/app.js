/**
 * Created by NathanBriscoe on 1/8/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());

app.use('/', index);

app.get('/', function(request, response){
    response.send('Hello World!')
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port', port);
});

module.exports = app;