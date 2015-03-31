var express = require('express');
var http = require('http');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var bytes = require('bytes');
var getport = require('getport');

var rootPath = process.cwd();

module.exports = function(port, dir, www, base) {
  var app = express();

  var static = path.join(process.cwd(), www);

  app.set('views', static);
  app.engine('html', require('ejs').renderFile);
  app.use(morgan('dev'));
  app.disable('etag');

  app.use(function(req, res, next) {
    res.set({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': 0
    });

    next();
  });

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({
    extended: false,
    limit: bytes('10mb')
  }));

  // parse application/json
  app.use(bodyParser.json({
    limit: bytes('10mb')
  }));

  app.use(app.router);

  if (dir != null) {
    rootPath = path.join(rootPath, dir);

    // if (base == null) {
    //   return console.log('缺少参数: -b --base mock 请求 base path');
    // }
    
    if (base == null) {
      base = '.';      
    }

    if (base[base.length - 1] !== '/') {
      base += '/';
    }

    base = url.resolve('/', base);

    app.all(url.resolve(base, '*'), function(req, res, next) {
      if (req.xhr) {
        return require('./lib/handler').on(req, res, rootPath, base);
      }

      next();
    });
  }

  www = url.resolve('/', www);

  app.use(www, express.directory(static));
  app.use(www, express.static(static));

  app.use('/', function(req, res, next) {
    res.redirect(www);
  });

  // development only
  if ('development' === app.get('env')) {
    app.use(express.errorHandler());
  }
  

  getport(port, function(e, p) {
    if (e) {
      throw e;
    }

    http.createServer(app).listen(p, function() {
      console.log('静态服务器已启动: http://localhost:' + p);

      if (dir != null && base != null) {
        console.log('mock 服务器已启动:  http://localhost:' + p + base);
      }
    });
  });
};
