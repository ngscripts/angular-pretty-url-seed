/**
 * Created by ulhaq on 4/7/2017.
 */
var express = require('express');
var path = require('path');

var expressApp = express();

expressApp.set('port', 3000);

expressApp.use(express.static(path.join(__dirname, '/')));
expressApp.use("/*", express.static(path.join(__dirname, 'index.html')));

var server = expressApp.listen(expressApp.get('port'), function() {
    var port = server.address().port;
    console.log('Development Magic Happening on Port : ' + port);
    console.log('Acces URL : http://localhost:'+port);
});