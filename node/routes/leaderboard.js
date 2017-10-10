var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');
var http = require('http');

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  request({
    uri: 'http://pong-full-stack-ahead-pong-api.herokuapp.com/player/leaderboard'
  }).pipe(res);
});

module.exports = router;
