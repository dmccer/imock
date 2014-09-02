var fs = require('fs');
var path = require('path');

var getFilenames = function (reqPath, mock) {
    var r = [];
    var realPath = reqPath.replace(/\/+$/, '').substring(mock.length);

    if (realPath.length < 2) {
        return r;
    }

    realPath = realPath.substring(1);

    var pathArr = realPath.split('/');

    var normal = pathArr.join('-');
    var l = normal.length;

    r.push(normal);

    pathArr.forEach(function (s) {
        if (normal.lastIndexOf('-' + s) == l - s.length - 1) {
            r.push(normal.substring(0, l - s.length) + 'id');
            return;
        }

        if (normal.indexOf(s + '-') === 0) {
            r.push('id' + normal.substring(s.length));
            return;
        }

        r.push(normal.replace('-' + s + '-', '-id-'));
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

var on = function (req, res, rootPath, base) {
    var files = getFilenames(req.path, base.substring(0, base.length));
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
    on: on
};
