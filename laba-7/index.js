const { Sequelize, Model, DataTypes } = require('sequelize');
const crypto = require('crypto');
const sequelize = new Sequelize('WEBTEX', 'root', '', {
    dialect: 'mysql'
  });

const Group = sequelize.define('Groups', {
    group: {
      type: DataTypes.STRING,
      allowNull: false
    }
});

const Student = sequelize.define('Students', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.DATE,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
    allowNull: false
  }

});

var express = require('express');
var session = require('express-session');
var app = express();
var passport = require('passport');
app.use(session({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
};

app.get('/', function(req, res) {
    let counter = req.session.counter ? req.session.counter : 1;
    req.session.counter = ++counter;
    res.send(`You see this page ${--counter} times`);
});

app.listen('3000');

function crypt(password) 
return crypto.createHash('sha256').update(password).digest('base64');

function registration(name,age,password){
Student.create({
    'name': name,
    'age': age,
    'password': crypt(password)
})
.then(created => {
    console.log(`Id of created student ${created.id}`)
})
.catch(err => {
    console.log(err);
});
}


passport.use('login', new LocalStrategy({
    passReqToCallback : true
  },
function(req, username, password, done) { 
    User.findOne({ 'username' :  username }, 
      function(err, user) {
        if (err)
          return done(err);
        if (!user){
          console.log('User Not Found with username '+username);
          return done(null, false, 
                req.flash('message', 'User Not found.'));                 
        }
        if (!isValidPassword(user, password)){
          console.log('Invalid Password');
          return done(null, false, 
              req.flash('message', 'Invalid Password'));
        }
        return done(null, user);
      }
    );
    }));