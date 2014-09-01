var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var path = require('path');
var handler = require('../lib/handler');

describe('handler.js', function () {
    describe('.getFilenames()', function () {
        it('should return 0 results when req.path = /mock || /mock/', function () {
            var reqPath = '/mock';
            var r = [];

            var files = handler.getFilenames(reqPath);

            assert.deepEqual(r, files);

            reqPath = '/mock/';
            files = handler.getFilenames(reqPath);

            assert.deepEqual(r, files);
        });

        it('should return 2 results when req.path = /mock/a', function () {
            var reqPath = '/mock/a';
            var r = ['a', 'id'];
            var files = handler.getFilenames(reqPath);

            assert.deepEqual(r, files);

            reqPath += '/';
            files = handler.getFilenames(reqPath);

            assert.deepEqual(r, files);
        });

        it('should return 3 results when req.path = /mock/a/b', function () {
            var reqPath = '/mock/a/b';
            var r = ['a-b', 'id-b', 'a-id'];

            var files = handler.getFilenames(reqPath);

            assert.deepEqual(r, files);
        });
    });

    describe('.findExists()', function () {
        it('should return null when req.path = /mock/a/b and no a-b.js, id-a.js, a-id.js file', function () {
            var reqPath = '/mock/a/b';
            var files = handler.getFilenames(reqPath);
            var existsFilename = handler.findExists(files, path.join(process.cwd(), 'test'));

            assert.isUndefined(existsFilename);
        });

        it('should return c when req.path = /mock/c and has c.js', function () {
            var reqPath = '/mock/c';
            var files = handler.getFilenames(reqPath);
            var existsFilename = handler.findExists(files, path.join(process.cwd(), 'test'));

            assert.equal('c', existsFilename);
        });
    });

    describe('.on()', function () {
    });
});
