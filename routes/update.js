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
    Model.User.findOne({
            where: {
                id: req.session.userlogin.id
            }
        })
        .then(function (data) {
            // res.send(data)
            res.render('update', {
                data
            })
        })
        .catch(function (err) {
            res.send(err.messege)
        })
})

router.post('/', function (req, res) {

    Model.User.update(req.body, {
            where: {
                id: req.session.userlogin.id
            }
        })
        .then(function () {
            res.redirect('/profil')
        })
        .catch(function (err) {
            res.send(err.messege)
        })

})




module.exports = router