var mysql=require('mysql');
var express=require('express');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ngdbproducts'
});

var app=express();

app.get('/Products', function (req, res) {
    con.connect();
    con.query('select * from tbl_products', function (err, rows, fields) {
        if(!err)
        {
        res.send(rows);
        }
    })
});

app.listen(8080);
console.log('Server Started');