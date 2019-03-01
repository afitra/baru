var express = require('express')
const app = express()
var router = express.Router()
const ejs = require('ejs')
app.set('view engine', 'ejs')
const Model = require('../models')
const midleware = require('../midlewere/midlewere')


router.get('/', midleware, function (req, res) {

    res.render('profil', {
        data: req.session.userlogin
    })

})


module.exports = router