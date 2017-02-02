angular.module('app')
.controller('WeekThreeController', ['$scope','$http', function($scope, $http) {

  $scope.phones = undefined;
  $scope.pictures = undefined;

  $http.get('../phones.json').then(function(phones){
    $scope.phones = phones.data;
  }).catch(function(error){
    debugger;
  })


   $http.get('https://pixabay.com/api/?key=1721193-5394d2a2ae3701a0f13d87d72&q=yellow+flowers&image_type=photo')
    .then(function(pictures){
      $scope.pictures = pictures.data.hits;
    })
    .catch(function(error){
       debugger;
    });



}]);