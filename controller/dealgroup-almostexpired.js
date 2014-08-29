exports.list = function (req, res) {
	setTimeout(function () {
		res.json(200, {
			"code": 200,
			"msg": [
				{
					"dealGroupId": 1323,
					"productTitle": "肖家面馆",
					"amountMonth": 123440,
					"amountAll": 123450,
					"commissionMonth": 2343,
					"commissionAll": 23324,
					"receiptEndTime": '2014-01-25',
					"amountLastMonth": 423232,
					commissionLastMonth: 4234,
					owner: '张三',
					startDate: '2013-11-11',
					endDate: '2014-01-25',
					owner: '李四',
					productDescription: '描述描述描述描述描述描述描述描述描述描述描述描, 述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
				},
				{
					"dealGroupId": 8877,
					"productTitle": "家有好面",
					"amountMonth": 48392,
					"amountAll": 483920,
					"commissionMonth": 234355,
					"commissionAll": -2332434,
					"receiptEndTime": '2013-12-12',
					"amountLastMonth": 123424,
					commissionLastMonth: 423232,
					owner: '张三',
					startDate: '2013-12-11',
					endDate: '2014-01-11',
					productDescription: '描述描述描述描述描述描述描述描述描述描述描述,描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
				}
			]
		})
	}, 2000);
}