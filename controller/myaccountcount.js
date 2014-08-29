exports.get = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            code: 200,
            msg: {
                "online": 23,
                "all": 56,
                "offline": 2,
                "new": 31
            }
        })
    });
};
