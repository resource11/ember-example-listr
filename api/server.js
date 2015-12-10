var jsonServer = require('json-server');
var pluralize = require('pluralize');
var db = require('./db');

var server = jsonServer.create();
server.use(jsonServer.defaults());

var router = jsonServer.router(db());

server.use(router);

server.listen(3000);
