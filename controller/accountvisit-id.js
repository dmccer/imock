exports.list = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            "msg": [{
                "visitIssue": null,
                "visitDate": "2014-05-07",
                "stage": "需求沟通",
                "partner": {
                    "name": null,
                    "id": null
                },
                "owner": {
                    "name": "吴昊",
                    "id": "00590000001PaGSAA0"
                },
                "marketingTools": "销售方案ppt",
                "id": "a10N00000008LlMIAU",
                "description": "老板很认可！！！此处省略1000字。。。此处省略1000字。。。此处省略1000字。。。此处省略1000字。。。此处省略1000字。。。",
                "businessType": "团购",
                "account": {
                    "name": "真功夫(中山公园店)",
                    "id": "0019000000HRVCyAAP"
                }
            }, {
                "visitIssue": null,
                "visitDate": "2014-05-08",
                "stage": "收款",
                "partner": {
                    "name": null,
                    "id": null
                },
                "owner": {
                    "name": "肖云华",
                    "id": "00590000001PaGSAA0"
                },
                "marketingTools": "销售方案ppt",
                "id": "a10N00000008LlMIA2",
                "description": "老板很认可！！！",
                "businessType": "团购",
                "account": {
                    "name": "真功夫(中山公园店)",
                    "id": "0019000000HRVCyAAP"
                }
            }],
            "code": 200
        })
    }, 1000)
}
