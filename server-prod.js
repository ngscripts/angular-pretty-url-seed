/**
 * Created by ulhaq on 4/7/2017.
 */
var express = require('express');
var path = require('path');

var expressApp = express();

expressApp.set('port', 80);

expressApp.use(express.static(path.join(__dirname, '/build')));
expressApp.use("/*", express.static(path.join(__dirname, '/build/index.html')));

var server = expressApp.listen(expressApp.get('port'), function() {
    var port = server.address().port;
    console.log('Production Magic Happening on Port : ' + port);
    console.log('Acces URL : http://localhost');
});