var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should;

var path = require('path');
var url = require('url');
var rewire = require("rewire");
var handler = rewire('../lib/handler');

var request = require('supertest');
var express = require('express');
var bodyParser = require('body-parser');

app = express();

describe('handler.js', function () {
    var getFilenames = handler.__get__('getFilenames');
    var findExists = handler.__get__('findExists');

    describe('.getFilenames()', function () {
        it('should return 0 results when req.path = /mock || /mock/', function () {
            var reqPath = '/mock';
            var r = [];

            var files = getFilenames(reqPath, reqPath);

            assert.deepEqual(r, files);

            files = getFilenames(reqPath + '/', reqPath);

            assert.deepEqual(r, files);
        });

        it('should return 2 results when req.path = /mock/a', function () {
            var reqPath = '/mock/a';
            var r = ['a', 'id'];
            var files = getFilenames(reqPath, '/mock');

            assert.deepEqual(r, files);

            reqPath += '/';
            files = getFilenames(reqPath, '/mock');

            assert.deepEqual(r, files);
        });

        it('should return 3 results when req.path = /mock/a/b', function () {
            var reqPath = '/mock/a/b';
            var r = ['a-b', 'id-b', 'a-id'];

            var files = getFilenames(reqPath, '/mock');

            assert.deepEqual(r, files);
        });
    });

    describe('.findExists()', function () {
        it('should return null when req.path = /mock/a/b and no a-b.js, id-a.js, a-id.js file', function () {
            var reqPath = '/mock/a/b';
            var files = getFilenames(reqPath, '/mock');
            var existsFilename = findExists(files, path.join(process.cwd(), 'test'));

            assert.isUndefined(existsFilename);
        });

        it('should return c when req.path = /mock/c and has c.js', function () {
            var reqPath = '/mock/c';
            var files = getFilenames(reqPath, '/mock');
            var existsFilename = findExists(files, path.join(process.cwd(), 'test'));

            assert.equal('c', existsFilename);
        });
    });
    
    var aget = function (_path) {
        var base = '/mock/';

        app.get(url.resolve(base, _path), function (req, res) {
            handler.on(req, res, path.join(process.cwd(), 'test'), base); 
        });
    }

    describe('.on()', function () {
        aget('/*');

        it('should response with json when request /mock/c', function (done) {
            request(app)
                .get('/mock/c')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('should response with json when request /mock/{id}', function (done) {
            request(app)
                .get('/mock/1234')
                .expect('Content-Type', /text\/html/)
                .expect(200, done);
        });

        it('should response with 404 when request /mock/a', function (done) {
            request(app)
                .get('/mock/a')
                .expect('Content-Type', /text\/html/)
                .expect(200, done);
        });

        it('should response with json when request /mock/p/q', function (done) {
            request(app)
                .get('/mock/p/q')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('should response with json when request /mock/p/{id}', function (done) {
            request(app)
                .get('/mock/p/1234')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });

        it('should response with json when request /mock/{id}/q', function (done) {
            request(app)
                .get('/mock/1234/q')
                .expect('Content-Type', /text\/html/)
                .expect(200, done);
        });
    });
});
