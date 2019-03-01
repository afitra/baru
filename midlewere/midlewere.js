module.exports = function (req, res, next) {

    if (req.session.userlogin) {
        next()
    } else {
        res.redirect('/login')
    }
}