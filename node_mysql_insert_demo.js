    var mysql=require('mysql');

    var con=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'ngdbproducts'
    });

    con.connect();

    var data={
                Product_ID:2,
                Product_Name: 'Fastrack Watch',
                Product_Price: 2500,
                Product_Mfd: new Date('2015/02/12')
            };

    con.query('Insert Into tbl_products SET ?', data, function (err) {
            if(!err)
            {
                console.log("Record Inserted");
            }
            else
            {
                console.log(err);
            }
    });

