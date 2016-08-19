var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  //res.send('registro de usuarios');
  res.render('registro_productor');

});

router.get('/login', function(req, res, next) {
  res.send('pagina de login');
});

router.get('/producer/event/admin', function(req, res, next) {
  res.send('pagina de administración de eventos para los produtores');
});

router.get('/producer/dashboard', function(req, res, next) {
  //res.send('pagina de dashboard para productores.  Definir cuales son los datos a mostrar aqui');
  res.render('producers/dashboard');
});

module.exports = router;
