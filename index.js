var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');
var app = express();
var request = require('request');
var moongoose = require('mongoose');
var User = require('./models/user');
var Fish = require('./models/fish')


moongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/oceanland');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/fish', expressJWT({secret: process.env.SECRET})
.unless({path:['/api/fish'],method:'get'}));
app.use('/api/users', expressJWT({secret: process.env.SECRET})
.unless({path: ['/api/users'], method: 'post'}));

app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send({message: 'You need an authorization token to view this information.'})
  }
});

app.get('/api/haha', function(req, res) {
	res.send('linkin')
});
	

app.post('/api/auth', function(req, res) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err || !user) return res.send({message: 'User not found'});
    user.authenticated(req.body.password, function(err, result) {
      if (err || !result) return res.send({message: 'User not authenticated'});

      var token = jwt.sign(user, process.env.SECRET);
      res.send({user: user, token: token});
    });
  });
});

app.use('/api/users', require('./controllers/users'));
app.use('/api/fish', require('./controllers/fishes'))

app.listen(process.env.PORT||3001)