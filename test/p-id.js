module.exports = {
    get: function (req, res) {
        res.json(200, {
            code: 200,
            msg: {
                customerName: 'xxx 有限公司',
                customerId: 1234
            }
        });
    }
}
