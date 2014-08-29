exports.index = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            "code": 200,
            "msg": {
                "user": {
                    "UserRole": "宁波团购餐饮1-1组销售代表",
                    "LoginId": "-14683",
                    "EmployeeNumber": "0001564",
                    "City": "宁波"
                },
                "contract": {
                    "rejected": 3,
                    "inApproval": 2,
                    "approved": 125
                },
                "dealGroup": {
                    "rejected": 2,
                    "online": 93,
                    "inProduction": 5
                },
                "performance": {
                    "teamAmount": 30000000,
                    "salesAmount": 300000,
                    "salesIncome": 6821359857,
                    "salesAdAmount": 729382211,
                    "onlineDealGroup": 20,
                    "onlineKABAccount": 33,
                    "newDealGroup": 32,
                    "yesterdaySalesAmount": 1212392,
                    "yesterdayTeamAmount": 124452233,
                    'newShop': 54321,
                    'onlineShop': 12345
                },

                "updateTime": "2014-01-16 11:11:11"
            }
        })
    }, 1000)
}