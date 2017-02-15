var app = angular.module('app',['ui.router'])
.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    templateUrl: '../html/hello.html'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: '../html/about.html'
  }

var contactState = {
  name: 'contact',
  url: '/contact',
  templateUrl: '../html/contact.html'
}

var blogState = {
  name: 'blog',
  url: '/blog',
  templateUrl: '../html/blog.html'
}
var postState = {
  name: 'post',
  url: '/post',
  templateUrl: '../html/post.html'
}

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(contactState);
  $stateProvider.state(blogState);
  $stateProvider.state(postState);


});
