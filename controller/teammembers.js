exports.list = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            "code": 200,
            "msg": [{
                "name": "赵成员",
                "id": "1"
            }, {
                "name": "钱成员",
                "id": "2"
            }, {
                "name": "孙成员",
                "id": "00590000000sZZTAA2"
            }]
        })
    }, 3000)
}