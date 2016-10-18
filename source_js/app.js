var app = angular.module('mp3',['ngRoute']);
//var ascend = document.getElementById('sort').checked;

app.config(function ($routeProvider) {
    $routeProvider
    .when("/list",{
        templateUrl : "partials/list.html",
        controller:"lController"
    })
    .when("/details/:rank",{
        templateUrl : "partials/details.html",
        controller:"dController"
    })
    .when("/gallery",{
        templateUrl : "partials/gallery.html",
        controller:"gController"
    });

});
