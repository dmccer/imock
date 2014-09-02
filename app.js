var express = require('express');
var http = require('http');
var path = require('path');
var url = require('url');
var bodyParser = require('body-parser');

var rootPath = process.cwd();

module.exports = function (port, dir, www, base) {
    var app = express();

    var static = path.join(process.cwd(), www);

    app.set('views', static);
    app.engine('html', require('ejs').renderFile);
    app.use(express.logger('dev'));

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    app.use(bodyParser.json());

    app.use(app.router);

    app.use(express.directory(static));
    app.use(express.static(static));

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    rootPath = path.join(rootPath, dir);

    if (base[base.length - 1] != '/') {
        base += '/';
    }

    app.all(url.resolve(base, '/*'), function (req, res) {
        require('./lib/handler').on(req, res, rootPath, base);
    });

    http.createServer(app).listen(port, function() {
        console.log('mock 服务器已在（' + port + '）端口启动！');
        console.log('通过下面地址访问mock数据:\n http://localhost:' + port + '/mock');
    });
};
