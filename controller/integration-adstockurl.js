exports.get = function (req, res) {
	res.json(200, {
		url: 'http://www.dianping.com/midasrb/crmapp/mainAction?cityId=123'
	})
}