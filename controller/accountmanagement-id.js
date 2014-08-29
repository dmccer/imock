exports.update = function(req, res) {
	setTimeout(function () {
		res.json(200, {
			code: 200,
			msg: '已经成功导入1家客户.'
		});

		// res.json(200, {
		// 	code: 911,
		// 	msg: '以下勾选的连锁店客户已经部分被其他销售跟进，按照业务规则不允许导入:鸿星荟(K11店)'
		// });

		// res.json(200, {
		// 	code: 500,
		// 	msg: 'Exception, invalid id: xxx'
		// });
	}, 2000)
}