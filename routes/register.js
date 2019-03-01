const express = require('express'),
    routes = express(),
    {
        User
    } = require('../models')
const helpers = require('../helpers/getname')
routes.get('/', (req, res) => {
    const input = {
        name: '',
        username: '',
        password: '',
        address: '',
        job: '',
        phone: '',
        gender: '',
        birthday: '',
        UrlImage: '',
        sallary: null

    }
    res.render('register', input)
})

routes.post('/', (req, res) => {
    // req.body.username = helpers(req.body.username)
    User.create(req.body)
        .then(() => {
            res.render('successRegister')
        })
        .catch(err => {
            res.send(err)
        })
})
module.exports = routes