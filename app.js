var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

/*app.get('/', function (request, response) {
 response.sendFile(__dirname + '/public/index.html');
 });*/ // instead we can use express static middleware serving files

app.use(express.static('public')); // static middleware serving files from public folder, by default it use index.html

var blocks = {
    'Fixed': 'Fastened securely in position',
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in circle around center'
};

app.get('/blocks', function (request, response) {
    if (request.query.limit >= 0) {
        response.json(blocks.slice(0, request.query.limit));
    } else {
        response.json(blocks);
    }
});

app.get('/blocks/:name', function (request, response) {
    var description = blocks[request.params.name];

    if (!description) {
        response.status(404).json('No description found for ' + request.params.name);
    } else {
        response.json(description);
    }
});

app.listen(8080);