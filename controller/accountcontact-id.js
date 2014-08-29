var Util = require('../lib/util');

exports.list = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            "msg": [{
                "title": "老板",
                "name": "胡德林",
                "mobilePhone": "",
                "id": "0039000000JnwJkAAJ",
                "email": "abc@abc.com"
            }, {
                "title": "老板",
                "name": "杨健斌",
                "mobilePhone": "18650731821",
                "id": "0039000000QsRKtAAN",
                "email": "cba@cba.com"
            }],
            "code": 200
        })
    }, 5000)
}


exports.add = function (req, res) {
    setTimeout(function () {
        if (Util.randomRes()) {
            res.json(200, {
                code: 200,
                msg: {}
            });    
        } else {
            res.json(200, {
                code: 500,
                msg: '[server msg] 添加 KP 失败'
            });
        }
        
    }, 2000)
}

exports.update = function (req, res) {
    setTimeout(function () {
        if (Util.randomRes()) {
            res.json(200, {
                code: 200,
                msg: '编辑 kp 成功'
            }); 
        } else {
            res.json(200, {
                code: 500,
                msg: '[server msg] 编辑 KP 失败'
            });
        }
        
    }, 2000)
}