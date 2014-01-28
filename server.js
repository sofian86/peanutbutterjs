'use strict';
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');
var extend = require('node.extend');

var app = express();
var exphbs = require('express3-handlebars');

//TODO Change to use the path making thingy to avaoid dependence on file seperator

//Setup the Configurations files
var config = extend({}, require('./config/default'));
config.env = app.get('env');
config = extend(config, require('./config/' + config.env));

var layoutsDir = 'development' === config.env ? 'views/layouts' : 'dist/views/layouts';
var partialsDir = 'development' === config.env ? 'views/partials' : 'dist/views/partials';

var hbs = exphbs.create({
	extname: '.hbs',
	layoutsDir: layoutsDir,
	partialsDir: partialsDir,
});

// all environments
app.set('port', process.env.PORT || config.port);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

var assets = 'development' === config.env ? 'app' : 'dist/assets';

// development only
if ('development' === app.get('env')) {
	//Temp to work with Grunt Compass stuff
	app.use('/assets/styles', express.static(path.join(__dirname, '.tmp/styles')));
	app.use(express.errorHandler());
} else {
	app.use('view cache');
}

app.use('/assets', express.static(path.join(__dirname, assets)));

app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});