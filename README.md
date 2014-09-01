# imock 

## Install

```bash
$ npm install imock -g
```

## Usage

```bash
$ imock -j json
```

## Options

-j --json mock 文件目录，该目录下存放 route-config.js 及所有处理请求的 js

-p --port 指定 mock server 端口后，默认 3000

-w --www 指定静态服务器根目录(express.directory)，默认当前目录


## route-config example

```javascript
module.exports = {
    'shop/:id': [{
        method: 'get',
        name: 'get'
    }, {
        method: 'put',
        name: 'update'
    }]
};
```

## mock 请求处理文件

filename: shop-id.js

```javascript
exports.get = function (req, res) {
    res.json(200, {
        name: '小南国',
        shopId: 1234,
        level: 3
    });
}

exports.update = function (req, res) {
    res.json(200, {
        name: '小南国',
        shopId: 1234,
        level: 5
    });
}

```
