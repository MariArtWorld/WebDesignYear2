angular.module('app')
.service('locationService', function($http){
    this.getLocations = function(){
        return $http.get('./json/data.json')
        .then(function(data){
             return data.data;
            })
    }
});
