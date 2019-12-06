var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Teste Triângulo' });
});

/* Post home page. */
router.post('/', function(req, res) {
  var valores = req.param.array;
  console.log(valores);
  global.db.insert({valores}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/draw');
      })
})

/* Post registro home page. */
router.post('/', function(req, res) {
  var funcao = req.param.funcname;
  var timeExec=parseFloat(req.body.performacefim);
  global.db.insertRegistroHome({funcao,timeExec}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/');
      })
})

/* Post registro draw page. */
router.post('/draw', function(req, res) {
  var funcao = req.body.view;
  var timeExec=parseFloat(req.body.view);
  global.db.insertRegistroDraw({funcao,timeExec}, (err, result) => {
          if(err) { return console.log(err); }
          res.redirect('/draw');
      })
})

/* GET draw page. */
router.get('/draw', function(req, res) {
  global.db.findOne((e, docs) => {
      if(e) { return console.log(e); }
      res.render('draw', { title: 'Desenho Triângulo', docs: docs });
      var valores=(docs.valores);
  })
  
})


module.exports = router;
