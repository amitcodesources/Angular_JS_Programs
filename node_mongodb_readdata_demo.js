var mongoClient=require('mongodb').MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017/ngprojectdb", function (err, db) {
    if(err){
        console.log(err);
    }
    else {
        console.log("Connected To MongoDB");
        db.collection('tblProducts', function (err, tab) {
            tab.find().toArray(function (err_m, items) {
                if(err_m){
                    console.log(err_m);
                }
                else {
                    console.log(items);
                }
            })
        })
    }
});