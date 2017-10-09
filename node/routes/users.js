var express = require('express');
var router = express.Router();

router.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id:1,
    username: "npmer$"
  },
  {
    id:2,
    username: "jpmer$"
  }]);
});

module.exports = router;
