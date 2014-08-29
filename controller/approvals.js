exports.list = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            code: 200,
            msg: [
            {
                type: 'contract-task',
                submittedBy: '李璐璐（宁波团购餐饮1-1组销售代表）',
                status: '',
                id: '04iO00000006ckgIA',
                createdTime: '2013-11-22 08:14:51',
                content: {
                    type: '团购机会',
                    name: '112203',
                    deals: null,
                    city: '宁波',
                    accountName: '揽香(龙之梦店)'
                }
            }, {
                type: 'contract-task',
                submittedBy: '李璐璐（宁波团购餐饮1-1组销售代表）',
                status: 'Approved',
                id: '04iO00000006cgIAA0',
                createdTime: '2013-11-22 08:14:51',
                content: {
                    type: '团购机会',
                    name: '112203',
                    deals: null,
                    city: '宁波',
                    accountName: '揽香(龙之梦店)'
                }
            }, {
                type: 'DealGroupApproval',
                submittedBy: '李璐璐（宁波团购餐饮1-1组销售代表）',
                status: '',
                id: '04iO0000000ckgIAA2',
                createdTime: '2013-11-22 08:14:51',
                content: {
                    "type": "团购订单",
                    "id": 123,
                    "accountName": "锦鳞大酒店",
                    "effectiveStartDate": "2014-01-24",
                    "effectiveEndDate": "2014-01-24",
                    "expectedOnlineDate": "2014-01-24",
                    "tgDetail": "详情123\n。。。此处省略3000字",
                    "requireVip": true,
                    "deals": [{
                        "sequence": 1,
                        "id": 123,
                        "title": "大套餐",
                        "marketPrice": 100,
                        "dealPrice": 80,
                        "cost": 50,
                        "maxJoin": 1000
                    }, {
                        "sequence": 2,
                        "id": 123,
                        "title": "大套餐",
                        "marketPrice": 100,
                        "dealPrice": 80,
                        "cost": 50,
                        "maxJoin": 1000
                    }]
                }
            }, {
                type: 'contract-task',
                submittedBy: '李璐璐（宁波团购餐饮1-1组销售代表）',
                status: 'Rejected',
                id: '04iO00000006ckgAA3',
                createdTime: '2013-11-22 08:14:51',
                content: {
                    type: '团购机会',
                    name: '112203',
                    deals: null,
                    city: '宁波',
                    accountName: '揽香(龙之梦店)'
                }
            }
            ]
        })
    }, 2000)
}