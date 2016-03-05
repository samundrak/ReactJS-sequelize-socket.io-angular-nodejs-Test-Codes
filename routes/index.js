var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
	  // req.model.User.findAll({})
	  // .then(function(d){
	  // 	var d = JSON.stringify(d);
	  // 	console.log(d[0])
	  // })
	  res.render('index')
});

module.exports = router;
