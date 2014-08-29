var path = require('path');
var _ = require('underscore')
var fs = require('fs');

module.exports = function(app, rootPath) {
    var routes = require(path.join(rootPath, 'route-config'));

    if (routes && routes.length) {
        routes.forEach(function (route, path) {
            route.forEach(function(action) {
                app[action['method']]('/mock/' + path, require(path.join(rootPath,  path.toLowerCase().replace('/:', '-').replace('/', '-')))[action['name']])
            })
        }); 
    }
}
