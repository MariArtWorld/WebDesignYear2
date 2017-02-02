angular.module('app').directive('applyClass', function(){

    return {
        restrict: 'A',
        scope:{
            applyClass:'='
        },
        controller: function($scope, $element){
            $element.addClass($scope.applyClass);
        }
    }

})