const express = require('express'),
    routes = express(),
    register = require('./register'),
    phone = require('./phoneLogin'),
    login = require('./login'),
    {
        User
    } = require('../models')

routes.get('/', (req, res) => {
    User.findAll()
        .then(Alldata => {
            // res.send(data)
            res.render('index', {
                data: Alldata
            })
        })
})

var home = require('./home')
var profil = require('./profil')
var del = require('./delete')
var update = require('./update')
var feedback = require('./feedback')

routes.use('/register', register)
routes.use('/phoneLogin', phone)
routes.use('/login', login)
routes.use('/delete', del)
routes.use('/update', update)
routes.use('/home', home)
routes.use('/profil', profil)
routes.use('/feedback', feedback)

module.exports = routes