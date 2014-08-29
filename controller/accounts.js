exports.list = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            "code": 200,
            "msg": [{
                "name": "客户1a",
                "id": "1"
            }, {
                "name": "客户2a",
                "id": "2"
            }, {
                "name": "东北水饺22a",
                "id": "001O000000GIVhTIAX"
            }, {
                "name": "Addda2TEST",
                "id": "3"
            }, {
                "name": "Arial 2",
                "id": "001O00000dIVhTIAX"
            }, {
                "name": "生命之水 a",
                "id": "4"
            }, {
                "name": "肥牛 Oh,yeah",
                "id": "001O00dIVhTIAX"
            }, {
                "name": "=== ==== === a 看你到底能最多放多少字，哈哈，试试看看 === === ====",
                "id": "5"
            }, {
                "name": "肥牛 Lay",
                "id": "001O00dhTIAX"
            }, {
                "name": "=== ==== === a 看你到底能最多放多少字，哈哈，试试看看 === === ====",
                "id": "6"
            }, {
                "name": "再来一飞洋 a",
                "id": "001O00dhAX"
            }]
        })
    }, 2000)
}