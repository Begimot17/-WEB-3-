const express = require('express');
const app = express();
const path = require("path");
const crypto = require('crypto');
var cookieParser = require('cookie-parser')
var passport = require('passport');
const {User} = require('./models');
app.use(cookieParser())
app.use(passport.initialize());
app.use(passport.session());



function crypt(password) {
    return crypto.createHash('sha256').update(password).digest('base64');
}


User.findAll().then((users) => {
    console.log(users);
});



app.get('/css/animate-custom.css', function (req, res) {
    res.sendFile(__dirname + "/View" + "/css/animate-custom.css");
});

app.get('/css/demo.css', function (req, res) {
    res.sendFile(__dirname + "/View" + "/css/demo.css");
});

app.get('/css/style3.css', function (req, res) {
    res.sendFile(__dirname + "/View" + "/css/style3.css");
});

app.get('/css/night.css', function (req, res) {
    res.sendFile(__dirname + "/View" + "/css/night.css");
});

app.get('/js/parallaxsoon.js', function (req, res) {
    res.sendFile(__dirname + "/View" + "/js/parallaxsoon.js");
});



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/View/index.html'));
});

app.get('/change', function (req, res) {
    res.sendFile(path.join(__dirname + '/View/Change.html'));
});

app.get('/changepass', function (req, res) {
    User.findOne({
            where: {
                "Login": req.query.login,
                "Password": crypt(req.query.password)
            }
        })
        .then(user => {
            user.update({
                    "Password": crypt(req.query.newpassword)
                })
                .then(updated => {
                    res.redirect('/');
                    console.log('Update password');
                })
                .catch(err => {
                    res.status(400).send('Bad request');
                });
        })
        .catch(err => {
            res.status(500).send('Ooops');
        });
});

app.get('/delete', function (req, res) {
    res.sendFile(path.join(__dirname + '/View/Delete.html'));
});

app.get('/deleteuser', function (req, res) {
    User.findOne({
            where: {
                "Login": req.query.login,
                "Password": crypt(req.query.password)
            }
        })
        .then(user => {
            user.destroy()
                .then(destroyed => {
                    res.redirect('/');
                    console.log('Delete User')
                })
                .catch(err => {
                    res.status(400).send('Bad request');
                });
        })
        .catch(err => {
            res.status(500).send('Ooops');
        });
});

app.get('/users', function (request, response) {
    User.findAll().then((users) => {
        response.json(users);
    })
});

app.get('/users/:id', function (request, response) {
    let {
        id
    } = require.params;
    User.findByPk(id).then((user) => {
        response.json(user);
    })
});

app.get('/register', function (request, response) {
    User.create({
            'Login': request.query.login,
            'Password': crypt(request.query.password)
        })
        .then(created => {
            console.log(`Success!!!`);
            response.sendFile(path.join(__dirname + '/View/index.html'));
        })
        .catch(err => {
            console.log(err);
        });
});

app.get('/autorize', function (request, response) {
    User.findOne({
            where: {
                "Login": request.query.login,
                "Password": crypt(request.query.password)
            }
        })
        .then(user => {
            if (user == null) {
                response.sendFile(path.join(__dirname + '/View/NotAutorize.html'));
            } else {
                response.sendFile(path.join(__dirname + '/View/Autorize.html'));
                response.cookie(user.Login, user.Password)
            }

        })
        .catch(err => {
            console.log(err);
        });
});

app.listen(3000);
