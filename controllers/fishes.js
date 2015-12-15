var express = require('express');
var Fish = require('../models/fish');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Fish.find(function(err, fishs) {
      if (err) return res.status(500).send(err);
      res.send(fishs);
    });
  })
  .post(function(req, res) {
    Fish.create(req.body, function(err, fish) {
      if (err) return res.status(500).send(err);
      res.send(fish);
    });
  });

router.route('/:id') 
  .get(function(req, res) {
    Fish.findById(req.params.id, function(err, fish) {
      if (err) return res.status(500).send(err);
      res.send(fish);
    });
  })
  .put(function(req, res) {
    Fish.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .delete(function(req, res) {
    Fish.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

module.exports = router;
