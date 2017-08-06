var express = require('express');
var app = express(); // work with express 

var NLTunnel = require('node-local-tunnel');
var options = {
    remoteHost: '127.0.0.1',
    localBase: 'http://localhost:3000'
};
NLTunnel.client(options); // just call client() somewhere with options, you are free to go 


app.use('/someurl', function (req, res, next) {
    res.json({ server: 'local' })
    // Your codes ... 
});

app.listen(3000);