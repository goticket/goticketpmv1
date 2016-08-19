/**
 * Created by ybarcelo on 25/02/2016.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render("admingt/login");
    //res.render('index');
});

router.get('/admin', function(req, res, next) {
    res.render("admingt/index");
    //res.render('index');
});


module.exports = router;
