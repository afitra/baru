var express = require('express')
const app = express()
var router = express.Router()
const ejs = require('ejs')
app.set('view engine', 'ejs')
const Model = require('../models')
const bcrypt = require('bcrypt');
const unik = require('../helpers/unik')
const decriptor = require('../helpers/passwordencriptor')
const session = require('express-session');
const midleware = require('../midlewere/midlewere')
const getUnik = require('../helpers/getUnik')
app.use(session({
    'secret': 'hacktiv8'
}));
router.get('/', midleware, function (req, res) {
    if (req.session.userlogin) {
        // res.send(req.session.userlogin);
    } else {
        // res.send('gak ada')
    }
    if (req.session.userlogin.gender == 'men') {
        var cari = 'women'
    } else {
        var cari = 'men'
    }
    Model.User.findAll({
            where: {
                gender: cari
            }
        })
        .then(function (data) {
            // res.send(data)
            res.render('home', {
                data: data,
                val: req.session.userlogin.id

            })
        })
        .catch(function (err) {
            res.send(err.messege)
        })
})

router.get('/like/:id', midleware, function (req, res) {
    // res.send('ok')
    let obj = {
        UserId: req.session.userlogin.id,
        status: "true",
        DislikeId: req.params.id
    }
    Model.Dislike.create(obj)
        .then(function () {
            res.redirect('/home')
        })
        .catch(function (err) {
            res.send(err.messege)
        })

    // res.send(obj)
})
router.get('/dislike/:id', midleware, function (req, res) {
    // res.send('ok')
    let obj = {
        UserId: req.session.userlogin.id,
        status: "false",
        DislikeId: req.params.id
    }
    Model.Dislike.create(obj)
        .then(function () {
            res.redirect('/home')
        })
        .catch(function (err) {
            res.send(err.messege)
        })

    // res.send(obj)
})

router.get('/favourite', midleware, function (req, res) {
    // var tampil = []
    Model.User.findOne({
            where: {
                id: req.session.userlogin.id
            },
            include: {
                model: Model.Dislike
            }
        })
        .then(function (data) {
            if (data.length == 0) {
                res.redirect('/home')
            } else {
                var hasil = unik(data)
                res.render('favourite', {
                    data: data,
                    isi: hasil
                })

            }
            // res.send('ok')
        })

    // res.send('tampil')
})

router.get('/tampil/:id', midleware, function (req, res) {

    Model.User.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (data) {
            // res.send(data)
            res.render('friends', {
                data
            })
        })
        .catch(function (err) {
            res.send(err.messege)
        })
})

router.get('/logout', midleware, function (req, res) {
    req.session.destroy()
    res.redirect('/')
})

router.get('/kencan', midleware, function (req, res) {
    var temp = null
    var ID = req.session.userlogin.id
    Model.User.findAll({
            where: {
                id: ID
            },
            include: [Model.Dislike]
        })
        .then(function (data) {
            // res.send(data)
            res.render('jadwal', {
                isi: data[0]
            })
        })
})

router.get('/kencan/:id', midleware, function (req, res) {

    var temp = (Number(req.session.userlogin.id) + Number(req.params.id)) % 30
    var tanggal = new Date(new Date().getFullYear(), new Date().getMonth(), temp).toDateString()
    // console.log(req.session.userlogin)
    // res.send(req.session.userlogin)
    if (req.session.userlogin.gender == 'men') {
        var obj = {
            WomenId: Number(req.params.id),
            MenId: Number(req.session.userlogin.id),
            Appointment: tanggal,
            UserId: Number(req.session.userlogin.id)
        }
    } else {
        var obj = {
            WomanId: Number(req.session.userlogin.id),
            MenId: Number(req.params.id),
            Appointment: tanggal,
            UserId: Number(req.session.userlogin.id)
        }
    }

    Model.TemanKencan.create(obj)
        .then(function (data) {
            res.redirect('/home')
        })
        .catch(function (err) {
            res.send(err.messege)
        })

    // Model.TemanKencan.create()

})
router.get('/janjian', function (req, res) {
    if (req.session.userlogin.gender == 'men') {
        Model.TemanKencan.findAll({
                where: {
                    MenId: req.session.userlogin.id
                }
            })
            .then(function (data) {
                res.send(data)
                res.render('list', {
                    data: data[0]
                })
            })
            .catch(function (err) {
                res.send(err.messege)
            })
    } else {
        Model.TemanKencan.findAll({
                where: {
                    WomenId: req.session.userlogin.id
                }
            })
            .then(function (data) {
                res.send(data)
                res.render('list', {
                    data: data[0]
                })
            })
            .catch(function (err) {
                res.send(err.messege)
            })
    }

})
// var temp = null
// var ID = req.session.userlogin.id
// Model.Dislike.findAll({
//         where: {
//             UserId: ID
//         }
//     })
//     .then(function (data) {
//         temp = getUnik(data)
//         // console.log(temp)
//         // res.send(data)
//         return Model.User.findOne({
//             where: {
//                 id: temp
//             }
//         })
//     })
//     .then(function (data) {
//         // res.send(data)

//         var temp = (Number(data.id) + Number(ID)) % 30
//         var tanggal = new Date(new Date().getFullYear(), new Date().getMonth(), temp).toDateString()
//         var obj = {
//             WomenId: Number(data.id),
//             MenId: Number(ID),
//             Appointment: tanggal
//         }
//         Model.TemanKencan.create(obj)
//             .then(function (data) {
//                 // res.send('ok')
//                 res.redirect('/home')
//             })

//         // res.send(obj)
//     })

//     .catch(function (err) {
//         res.send(err.messege)
//     })


module.exports = router