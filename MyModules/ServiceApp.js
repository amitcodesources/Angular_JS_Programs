var app=angular.module('ServiceApp', []);

app.factory('MathFactory', function () {
    var factory = {};
    factory.RandomCode = function() {
        var a=Math.random()*10;
        var b=Math.random()*10;
        var c=Math.random()*10;
        var d=Math.random()*10;
        var e=Math.random()*10;
        var number =Math.round(a) + " " + Math.round(b) + " " + Math.round(c) + " " + Math.round(d) + " " + Math.round(e);
        return number;
    };
    return factory;
});

app.service('CaptchaService', function (MathFactory) {
    this.captcha = function () {
        return MathFactory.RandomCode();
    }
});