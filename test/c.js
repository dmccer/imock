module.exports = {
    get: function (req, res) {
        res.send(200, {
            code: 200,
            msg: {
                shopName: '小南国',
                shopId: '1234',
                level: 5
            }
        });
    },

    put: function (req, res) {
        res.json(200, {
            code: 200,
            msg: '修改成功'
        });
    },

    post: function (req, res) {
        res.json(200, {
            code: 200,
            msg: '保存成功'
        });
    },

    update: function () {},

    patch: function () {}
};
