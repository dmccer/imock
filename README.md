# imock 
restful mock server for front-end developer

[![NPM](https://nodei.co/npm/imock.png)](https://nodei.co/npm/imock/)

[![Build Status](https://travis-ci.org/dmccer/imock.svg)](https://travis-ci.org/dmccer/imock)
[![Coverage Status](https://coveralls.io/repos/dmccer/imock/badge.png?branch=master)](https://coveralls.io/r/dmccer/imock?branch=master)

## Install

```bash
$ npm install imock -g
```

## Usage

```bash
$ imock -j json -b api
```

## Options

-j --json 必填，mock 文件目录，该目录下存放所有处理请求的 js

-b --base 必填，指定 mock 请求的 base path

-p --port 可选，指定 mock server 端口后，默认 3000

-w --www 可选，指定静态服务器根目录(express.directory)，默认当前目录 


注: 

    1. www 与 base 可以是同层级或 www 是 base 的父目录，base 不能是 www 的父目录;
    2. 通常 base 为 /mock 或 /api;
    3. 前端 js 中请求地址为 http://localhost:3000/mock 或 http://localhost:3000/api


## mock 请求处理文件 example

filename: shop-id.js

```javascript
// request path: /mock/shop/1234
// request method: get
exports.get = function (req, res) {
    res.json(200, {
        code: 1,
        msg: {
            name: '小南国',
            shopId: 1234,
            level: 3
        }
    });
}

// request path: /mock/shop/1234 
// request method: put
exports.put = function (req, res) {
    res.json(200, {
        code: 1,
        msg: '修改成功'
    });
}
```

filename: shop.js

```javascript
// request path: /mock/shop
// request method: post
exports.post = function (req, res) {
    res.json(200, {
        code: 1,
        msg: '保存成功'
    });
}
```
