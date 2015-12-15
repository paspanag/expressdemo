var express = require('express');
var app = express();

app.get('/', function(req, res) {
        res.send('This is a demo express application, running on a rumpkernel');
});

var server = app.listen(3000, function () {
        console.log('App listening on %s', server.address().port);
})
