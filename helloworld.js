var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.send('Hello World...');
});

app.get('/blocks', function (request, response) {
    var blocks = ['Fixed', 'Movable', 'Rotating'];
    response.json(blocks); //same as response.send(blocks);
});

app.get('/parts', function (request, response) {
    response.redirect('/blocks');
    // response.redirect(301, '/blocks'); To set optional status code
});

app.listen(8080, function () {
    console.log('Listening on port 8080');
});