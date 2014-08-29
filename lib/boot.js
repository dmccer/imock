var path = require('path');
var _ = require('underscore')
var fs = require('fs');

module.exports = function(app, rootPath) {
    var routes = require(path.join(rootPath, 'route-config'));
    
    if (routes) {
        _.each(routes, function (route, _path) {
            route.forEach(function(action) {
                app[action['method']]('/mock/' + _path, require(path.join(rootPath, _path.toLowerCase().replace('/:', '-').replace('/', '-')))[action['name']])
            })
        }); 
    }
}
