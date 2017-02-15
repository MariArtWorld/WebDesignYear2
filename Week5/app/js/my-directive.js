angular.module('app').directive('blogPost', function () {

    return {
        restrict: 'EA',
        scope:{
           $scope: '='
        },
        template: '<br/><div ng-controller="myController"><div ng-repeat="post in posts"> <h2 id="{{post.id}}"> {{ post.title }} </h2> <blockquote> {{ post.post }}<footer> {{post.author}} </footer><a href="index.html#/blog">Up</a></blockquote></div></div><br/>',
  }
    })
    angular.module('app').directive('showForm', function () {

        return {
            restrict: 'EA',
            scope:{
               $scope: '='
            },
    template: '<div class="container"><form class="form-group"> <label for="usr"> Email: </label> <input type="text" class="form-control" id="usr" name="email"/><br/> <label for="usr"> Name:</label> <input type="text" class="form-control" id="usr" name="Name"/><br/> <label for="usr"> Surname:</label> <input type="text" class="form-control" id="usr" name="surname"/><div class="form-group"><br/><label for="comment">Please leave your comment here:</label><textarea class="form-control" rows="5" id="comment"></textarea></div>  </form></div>'
              }})
