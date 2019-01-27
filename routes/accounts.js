var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/create',function(req, res, next){
  var _id = req.body.id;
  var _pw = req.body.pw;//sha256으로 암호화 후 저장
  var _email = req.body.email;
  var _name = req.body.name;

  //데이터 저장
  var _nickname = req.body.nickname;
  var _user_id;//mongodb에서 auto increment 같은 기능으로?


});

module.exports = router;
