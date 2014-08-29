exports.index = function (req, res) {
	setTimeout(function () {
		res.json(200, {
			code: 200,
			msg: {
	            inProduction: 3,
			    online: 3,
			    almostExpired: 10
			}
		})	
	}, 2000);
}