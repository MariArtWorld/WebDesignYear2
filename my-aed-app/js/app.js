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
              .state('tabs.map.direction1', {
                url:'/direction1',
                views: {
                  'map-tab@tabs': {
                    templateUrl: 'templates/direction1.html',
                    controller: 'directionController'
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




      $urlRouterProvider.otherwise("/tab/home");



  });
