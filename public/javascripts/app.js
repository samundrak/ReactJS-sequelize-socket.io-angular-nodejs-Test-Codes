var io =  io.connect("http://localhost:2000");
var app = angular.module('app',['ui.router']);
app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    // $urlMatcherFactory.strictMode(false);

    $urlRouterProvider.otherwise("/")
})   