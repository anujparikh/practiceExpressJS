var express = require('express');
var app = express();

/*app.get('/', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
});*/ // instead we can use express static middleware serving files

app.use(express.static('public')); // static middleware serving files from public folder, by default it use index.html

app.listen(8080);