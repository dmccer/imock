exports.list = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            "code": 200,
            "msg": [{
                "name": "张三",
                "id": "1"
            }, {
                "name": "李四",
                "id": "2"
            }, {
                "name": "张美玲",
                "id": "00590000000sZZTAA2"
            }]
        })
    }, 3000)
}