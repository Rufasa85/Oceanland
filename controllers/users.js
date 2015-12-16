var express = require('express');
var User = require('../models/user');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    User.find(function(err, users) {
      if (err) return res.status(500).send(err);
      res.send(users);
    });
  })
  .post(function(req, res) {
    User.find({email:req.body.email}, function(err, users) {
      console.log(users)
      if (users.length >0){
        res.send({error:'User already exists!'});
      }
      else{
        User.create(req.body, function(err, user) {
          if (err) return res.status(500).send(err);
          res.send(user);
        });
      }
    })
  });

router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.status(500).send(err);
    res.send(user);
  });
});

module.exports = router;
