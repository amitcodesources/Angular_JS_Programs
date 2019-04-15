var app=angular.module('FactoryApp', []);

app.factory('FormatFactory', function () {
   var factory = {};
   factory.bolder = function(str) {
       return str.bold();
   };
   factory.changecase = function (str) {
       return str.toUpperCase();
   };
   return factory;
});

app.factory('MathFactory', function () {
    var factory = {};
    factory.total = function(qty, price) {
        return qty*price;
    };
    return factory;
});