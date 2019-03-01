var express = require('express')
const app = express()
var routes = express()
app.set('view engine', 'ejs')
const Model = require('../models')

routes.get('/', function (req, res) {
    res.render('login')
})

routes.post('/', function (req, res) {
    // res.send('ok')
  
    // ===============================midlewere
    var username = req.body.username
    var password = req.body.password
    // res.send([username, password])
    Model.User.findAll({
            where: {
                username
            }
        })
        .then(function (data) {
            res.send('berhasil login')
        })
        .catch(function (err) {
            res.send(err)
        })

})

routes.get('/sm',(req,res)=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var uid = user.uid;
          var phoneNumber = user.phoneNumber;
          var providerData = user.providerData;
          user.getIdToken().then(function(accessToken) {
            document.getElementById('sign-in-status').textContent = 'Signed in';
            document.getElementById('sign-in').textContent = 'Sign out';
            document.getElementById('account-details').textContent = JSON.stringify({
              displayName: displayName,
              email: email,
              emailVerified: emailVerified,
              phoneNumber: phoneNumber,
              photoURL: photoURL,
              uid: uid,
              accessToken: accessToken,
              providerData: providerData
            }, null, '  ');
          });
        } else {
          // User is signed out.
          document.getElementById('sign-in-status').textContent = 'Signed out';
          document.getElementById('sign-in').textContent = 'Sign in';
          document.getElementById('account-details').textContent = 'null';
        }
    }
})



module.exports = routes