var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teste Triângulo' });
});

/* Post home page. */
router.post('/draw', function(req, res) {
  var valores = req.body.valores;
  global.db.insert({valores}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/draw');
      })
})

/* GET draw page. */
router.get('/draw', function(req, res, maxSum) {
  global.db.findOne((e, docs) => {
      if(e) { return console.log(e); }
      res.render('draw', { title: 'Lista valores', docs: docs });
      var valores=(docs.valores);
  })
  
})


module.exports = router;
