var express = require('express')
const app = express()
var router = express.Router()
const ejs = require('ejs')
app.set('view engine', 'ejs')
const Model = require('../models')
const midleware = require('../midlewere/midlewere')


const session = require('express-session');
app.use(session({
    'secret': 'hacktiv8'
}));

router.get('/', midleware, function (req, res) {

    res.render('feedback')

})

router.post('/', function (req, res) {
    // res.send(req.session.userlogin)
    const {
        rating,
        comment
    } = req.body
    let ID = req.session.userlogin.id

    Model.feedback.create({
            UserId: ID,
            rating: rating,
            comment: comment
        })
        .then(function () {
            // res.redirect('/home')
            res.send('okokk')
        })
        .catch(function (err) {
            res.send(err.messege)
        })
})


module.exports = router