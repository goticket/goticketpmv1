/**
 * Created by ybarcelo on 25/02/2016.
 */
var express = require('express');
var mysql = require('mysql');
/*
connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Cde34rfv',
        database: 'goticket'
    }
);
*/
var db = require('../db.js');


/*Devuelve todos los eventos */

exports.getAllActive = function(done) {
    db.get(db.READ, function(err, connection) {
        if (err) return done('Database problem')

        connection.query('SELECT * FROM event', function (err, rows) {

            //if (err) return done(err)
            //done(null, rows)
            console.log(rows[0].titulo);

        })
    })
}

/*
var eventModel = {};
//obtenemos todos los eventos
eventModel.getAllActive = function(done)
{
    if (connection)
    {
        connection.query('SELECT * FROM evento ORDER BY idEvento', function(error, rows) {
            //if(error)throw error;
            //callback(null, rows);
            //console.log(rows);
            //return rows;
            if (err) return done(err)
            done(null, rows)

        });
    }
}

module.exports = eventModel;
*/
