const routes = require('express')(),
    {
        User
    } = require('../models')

routes.get('/', (req, res) => {
    res.render('phoneLogin')
})
routes.get('/verifyphoneLogin', (req, res) => {
    res.render('loading')
})
routes.post('/verifyphoneLogin', (req, res) => {
    User.findAll({
            where: {
                'phone': req.body
            }
        })
        .then(function (data) {
            if (data.length == 0) {
                res.redirect('/register')
            } else {
                req.session.userlogin = {
                    id: data[0].id,
                    username: data[0].username,
                    gender: data[0].gender
                }
                res.redirect('/home')

            }
        })
        .catch(function (err) {
            res.send(err)
        })
})
module.exports = routes