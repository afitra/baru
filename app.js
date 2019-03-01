const express = require('express'),
    app = express(),
    port = 3000,
    routes = require('./routes/routes'),
    session = require('express-session');
app.use(session({
    'secret': 'hacktiv8'
}));
app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: false
}))
app.use('/', routes)
app.listen(port, err => {
    if (!err) {
        console.log(`
            ${new Date().toDateString()}
            port running ob ${port}
        `)
    } else {
        console.log(err)
    }
})