var express = require('express');
var app = express(); // work with express 

// on remote server, init NLT first 
var NLTunnel = require('node-local-tunnel');
NLTunnel.init();  // init the tunnel server 

// then hannel all logic requests by app.use 
app.use(NLTunnel.server());



app.listen(8001);