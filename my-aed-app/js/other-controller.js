angular.module('app')
/*.controller('otherController', ['$scope', function ($scope) {
$scope.steps = [
  {
    id: "step1",
    title: "Step 1",
    instructions: "Keep calm: Call an ambulance or ask someone to call it for you. Also ask them to bing you and AED.",
    picture : "http://www.clipartlord.com/wp-content/uploads/2012/11/ambulance2.png"
  },
  {
    id: "step2",
   title: "Step 2",
    instructions: "Comprove if the person is breathing. If not, put one hand over the other over the chest of the person and start to press hard and at a continuous rithm",
    picture : "https://upload.wikimedia.org/wikipedia/commons/5/54/2002_CPR_Technique.jpg"
  },
  {
    id: "step3",
    title: "Step 3",
    instructions: "After 30 compresion, if you had being trained give the person two breaths. Otherwise keep doing cpr",
    picture: "http://nursing411.org/Courses/MD0532_Cardiopulmonary_Resuscitation/MD0532/images/md0532_img_11.jpg"
  },
  {
    id: "step4",
    title: "Step 4",
    instructions:"continue CPR until helps arrive",
    picture: "http://www.blogs.redcross.org.uk.gridhosted.co.uk/wp-content/uploads/2010/10/cpr-blogweb.jpg"
  }
]

}]);
*/
.controller('otherController', function($scope, $http) {
  $http.get('../json/cpr.json').
    success(function(data) {
      $scope.steps = data;
    });
});
