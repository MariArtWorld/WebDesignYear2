  var app = angular.module('app',['ionic'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tabs', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })
      .state('tabs.home', {
          url: "/home",
          views: {
            'home-tab': {
              templateUrl: "templates/home.html",
            }
          }
        })
        .state('tabs.map', {
      url: "/map",
      views: {
        'map-tab': {
          templateUrl: "templates/map.html",
          controller: "MapController"
        }
      }
    })

    .state('tabs.cpr1', {
      url: "/cpr",
      views:{
        "cpr-tab": {
      templateUrl: "templates/cpr1.html",
      controller: "otherController"
  }  }})

  .state('directions1', {
    url:'/directions1',
    views:{
    'directions1':{
    templateUrl: 'templates/direction1.html',
    controller: "directionController"
  }}
  })


      $urlRouterProvider.otherwise("/tab/home");



  });
