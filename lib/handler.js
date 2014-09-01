var fs = require('fs');
var path = require('path');

var MOCK = '/mock';

var getFilenames = function (reqPath) {
    var r = [];
    var realPath = reqPath.replace(/\/+$/, '').substring(MOCK.length);

    if (realPath.length < 2) {
        return r;
    }

    realPath = realPath.substring(1);

    var pathArr = realPath.split('/');

    var normal = pathArr.join('-');

    r.push(normal);

    pathArr.forEach(function (s) {
        r.push(normal.replace(s, 'id'));
    });

    return r ;
};

var findExists = function (files, rootPath) {
    var l = files.length;
    var i = 0;
    var filename;
    var exisitsFilename;

    while(i < l) {
        filename = path.join(rootPath, files[i]);

        if (fs.existsSync(filename + '.js')) {
            exisitsFilename = files[i];
            break;
        }

        i++;
    }

    return exisitsFilename;
};

var on = function (req, res, rootPath) {
    var files = getFilenames(req.path);
    var exisitsFilename = findExists(files, rootPath);

    var mod;

    if (exisitsFilename) {
        mod = require(path.join(rootPath, exisitsFilename));

        mod[req.method.toLowerCase()](req, res);
    } else {
        res.send('404, ' + req.path + ' not found!');
    }
};

module.exports = {
    on: on,
    getFilenames: getFilenames,
    findExists: findExists
};
