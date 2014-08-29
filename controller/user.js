exports.get = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            code: 200,
            msg: {
                // "userType": "TGSales",
                "userType": "TGManagertemplate",
                "UserRoleId": "00E90000000GOsSEAW",
                "UserRole": "上海团购2-5组销售代表",
                "ProfileName": "DPSales",
                "position": "Sales",
                "name": "齐玲玲",
                "LoginId": "-15579",
                "id": "00590000000sZYYAA2",
                "EmployeeNumber": "0001869",
                "CityId": "13",
                "City": "成都",
                "bu": "交易平台"
            }
        })
    }, 5000)
}