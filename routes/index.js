var express = require('express');
var router = express.Router();
var EventoModel = require('../models/eventModel')


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'ESTO ES UNA PRUEBA' });
    console.log(EventoModel.getAllActive);
    //console.log("Prueba: "+EventoModel.getAllActive());
    //res.render('index');
});

/* Test QR Code. */
router.get('/testqr', function(req, res, next) {

    res.render('testqr');
});

router.get('/event/:id', function(req, res, next) {
  res.render('detail',{ idevent : req.params.id , tituloEvento : "ofdsofdsifdsoifds Pipe Pelaez"});
//  res.send('detalle del evento:'+req.params.id);
});

router.get('/event/buy/:id', function(req, res, next) {
  //res.render('detail',{ idevent : req.params.id , tituloEvento : "Concierto Pipe Pelaez"});
   res.send(' aqui va la pantalla para preparar el pago');
});



/*
router.get('/event:idevent', function(req, res, next) {
  var idevent = req.params.idevent;
  res.send('detalle del evento:'+idevent);
});
*/
module.exports = router;
