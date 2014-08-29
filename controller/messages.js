exports.list = function(req, res) {
	setTimeout(function () {

	res.json(200, {
		"code": 200,
		"msg": [
		{
			"id": 1,
			"categoryId": 4,
			"categoryName": "合同驳回",
			"title": "小肥羊小肥羊小肥羊小肥羊小肥羊小肥羊小肥羊小肥羊",
			"time": "10-23 15:20",
			"msg": "合同被驳回，GT12DSFF",
			"extra": '',
			"read": false
		}, {
			"id": 2,
			"categoryId": 4,
			"categoryName": "合同驳回",
			"title": "小小肥羊小肥羊小肥羊小肥羊小肥羊小肥羊小肥羊小肥羊肥羊",
			"time": "10-23 15:20",
			"msg": "合同被驳回，GT12DSFF",
			"extra": '',
			"read": true
		}, {
			"id": 3,
			"categoryId": 4,
			"categoryName": "合同驳回",
			"title": "小肥羊",
			"time": "10-23 15:20",
			"msg": "合同被驳回，GT12DSFF",
			"extra": '',
			"read": false
		}, {
			"id": 4,
			"categoryId": 5,
			"categoryName": "合同驳回",
			"title": "小肥羊",
			"time": "10-23 15:20",
			"msg": "合同被驳回，GT12DSFF",
			"extra": '',
			"read": false
		}, {
			"id": 5,
			"categoryId": 5,
			"categoryName": "合同通过",
			"title": "小肥羊",
			"time": "10-23 15:20",
			"msg": "合同被驳回，GT12DSFF",
			"extra": '',
			"read": false
		}, {
			"id": 6,
			"categoryId": 5,
			"categoryName": "合同通过",
			"title": "6小肥羊",
			"time": "10-23 15:20",
			"msg": "合同被驳回，GT12DSFF",
			"extra": '',
			"read": false
		}, {
			"id": 7,
			"categoryId": 5,
			"categoryName": "合同通过",
			"title": "7小肥羊",
			"time": "10-23 15:20",
			"msg": "合同被驳回，GT12DSFF",
			"extra": '',
			"read": false
		}
		]
	});
	}, 1000);
}

exports.update = function(req, res) {
	res.json(200, "success")
}