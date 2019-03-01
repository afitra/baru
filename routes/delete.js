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

    res.render('opinion')
    // res.send(req.params.id)
})
router.post('/fix', function (req, res) {
    Model.User.destroy({
            where: {
                id: req.session.userlogin.id
            }
        })

        .then(function (data) {
            res.redirect('/register')
        })
        .catch(function (err) {
            res.send(err.messege)
        })
})



module.exports = router