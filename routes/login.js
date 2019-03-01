var express = require('express')
const app = express()
var router = express.Router()

const {
    User
} = require('../models')


const decriptor = require('../helpers/passwordencriptor')
const session = require('express-session');
app.use(session({
    'secret': 'hacktiv8'
}));
router.get('/', function (req, res) {
    if (req.session.userlogin) {
        res.redirect('/home');
    } else {
        res.render('login')
    }
})
router.post('/', function (req, res) {
    const {
        username,
        password
    } = req.body
    User.findAll({
            where: {
                username
            }
        })
        .then(function (data) {
            if (data.length == 0) {
                res.render('/register')
            } else {

                var validate = decriptor(password, data[0].password)
                if (validate == true) {
                    req.session.userlogin = {
                        id: data[0].id,
                        username: data[0].username,
                        name: data[0].name,
                        address: data[0].address,
                        job: data[0].job,
                        phone: data[0].phone,
                        gender: data[0].gender,
                        UrlImage: data[0].UrlImage,
                        sallary: data[0].sallary

                    }
                    res.redirect('/home')
                } else {
                    res.send(404, 'anda salah memasukan password')
                }
            }
        })
        .catch(function (err) {
            res.send(err)
        })
})


module.exports = router