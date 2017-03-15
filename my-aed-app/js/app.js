var app = angular.module('app',['ionic'])
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      name: 'home'
    })
    .state('map', {
      url:'/map',
      templateUrl: "templates/map.html",
      name: 'map',
      controller: 'MapController'

    })

    $urlRouterProvider.otherwise("/home");



});
