var fs = require('fs');
var path = require('path');

function combine(arr, num) {
    var r = [];
    (function f(t, a, n) {
        if (n == 0) return r.push(t);
        for (var i = 0, l = a.length; i <= l - n; i++) {
            f(t.concat(a[i]), a.slice(i + 1), n - 1);
        }
    })([], arr, num);
    return r;
}

var getFilenames = function (reqPath, mock) {
    console.log(reqPath);

    var r = [];
    var realPath = reqPath.replace(/\/+$/, '').substring(mock.length);

    if (realPath.length < 2) {
        return r;
    }

    realPath = realPath.substring(1);

    var pathArr = realPath.split('/');

    var normal = pathArr.join('-');
    var l = normal.length;
    var i = 0;

    r.push(normal);

    while (i++ <= l) {
        var tmpArr = combine(pathArr, i);

        tmpArr.forEach(function (item) {
            var filename = normal;

            item.forEach(function (s) {
                filename = filename.replace(s, 'id');
            });

            r.push(filename);
        });
    }

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
    var files = getFilenames(req.path, base.substring(0, base.length - 1));
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
