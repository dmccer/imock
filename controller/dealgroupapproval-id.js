exports.update = function(req, res) {
    // setTimeout(function() {
    //     res.json(200, {
    //         "code": "911",
    //         "msg": "已处理或不存在！"
    //     })
    // }, 1000)
    setTimeout(function() {
        res.json(200, {
            "code": 200,
            "msg": {
                type: 'DealGroupApproval',
                submittedBy: '李璐璐（宁波团购餐饮1-1组销售代表）',
                status: 'Approved',
                createdTime: '2013-11-22 08:14:51',
                content: {
                    type: '团购订单',
                    name: '112203',
                    deals: null,
                    city: '宁波',
                    accountName: '揽香(龙之梦店)'
                }
            }
        })
    }, 1000)
}