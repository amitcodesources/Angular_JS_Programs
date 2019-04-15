var mongoClient=require('mongodb').MongoClient;

mongoClient.connect("mongodb://127.0.0.1:27017/ngprojectdb", function (err) {
   if(!err){
       console.log("Connected To MongoDB");
   }
   else console.log(err);
});