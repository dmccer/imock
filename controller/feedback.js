exports.create = function(req, res) {
    setTimeout(function() {
        res.json(200, {
            code: 200,
            msg: {}
        })
    }, 1000)
}