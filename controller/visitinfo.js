exports.index = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            "code": 200,
            "msg": {
                "isManager": false,
                "user": "3",
                "metric": {
                    "visitNumberByWeek": 10,
                    "visitNumberByMonth": 100,
                    "visitNumberByDay": 3
                },
                "visitList": [
                {
                    "account": {
                        "name": "揽香（龙之梦店）",
                        "id": "1"
                    },
                    "id": "3",
                    "stage": "介绍产品",
                    "description": "",
                    "visitDate": "2013-09-23",
                    "businessType": "会员卡;团购",
                    "partner": {
                        "name": "周一二三",
                        "id": "2"
                    },
                    "owner": {
                        "name": "李璐璐",
                        "id": "3"
                    },
                    "marketingTools": "销售工具包;销售方案ppt",
                    "visitIssue": ""
                }, {
                    "account": {
                        "name": "小巴辣子（中山公园店）",
                        "id": "1"
                    },
                    "id": "4",
                    "stage": "协商价格",
                    "description": "我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦。。。。。我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦。。。我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦。。。我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦我来换个行啦啦啦",
                    "visitDate": "2013-09-23",
                    "businessType": "团购;会员卡;预订;推广;外卖",
                    "owner": {
                        "name": "李璐璐",
                        "id": "2"
                    },
                    "marketingTools": "营销工具",
                    "visitIssue": ""
                }
                ]
            }
        });
    }, 3000);
}