exports.index = function(req, res) {
    setTimeout(function() {
        if (parseInt(req.param.id)) {
            res.json(200, {
                "code": 200,
                "msg": {
                    "id": 1,
                    "categoryId": 3,
                    "categoryName": "合同通过",
                    "title": "小肥羊",
                    "time": "10-23 15:20",
                    "msg": "合同被驳回，GT12DSFF",
                    "extra": '',
                    "read": false
                }
            })
        } else {
            res.json(200, {
                "code": 200,
                "msg": [
                {
                    id: 21,
                    name: '系统消息',
                    count: 15,
                    icon: ''
                }, {
                    "id": 3,
                    "name": "合同消息",
                    "count": 109,
                    "icon": ""
                }, {
                    "id": 7,
                    "name": "团单消息",
                    "count": 2,
                    "icon": ""
                }, {
                    "id": 16,
                    "name": "财务消息",
                    "count": 80,
                    "icon": ""
                }, {
                    "id": 'Approval',
                    "name": "审批",
                    "count": 100,
                    "icon": ""
                }, {
                    "id": 23,
                    "name": "客服消息",
                    "count": 13,
                    "icon": ""
                }
                ]
            })
        }
    }, 1000)
}

exports.update = function(req, res) {
    res.json(200, {
        "code": 200,
        "msg": "操作成功"
    })
}