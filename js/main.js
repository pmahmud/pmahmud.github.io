
/**
 * Main AngularJS Web Application
 */
var app = angular.module('pmahmudApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html",
      controller: "MainCtrl"
    })
    .when("/blog", {
      templateUrl: "partials/blog.html",
      controller: "BlogCtrl"
    })
    .otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope, BlogFactory) {
  $scope.BlogCtrl = this;
  angular.extend($scope.BlogCtrl,{
    title: "My blogs",
    blogs: BlogFactory.getBlogs()
  });
  console.log(BlogFactory.getBlogs());
});

app.controller('MainCtrl', function ($log) {
  console.log("Page Controller reporting for duty.");
});

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});

app.factory('BlogFactory', function($http, $log){
  var jsonURL = 'https://raw.githubusercontent.com/pmahmud/pmahmud.github.io/master/blog/list.json';
  var blogs = {};
  $http.get(jsonURL).then(function(data){
    try{
      blogs = angular.fromJson(data);
    }catch(error){
      //handleError
    }
  }, function(response){
    //handleError
  });

  var _getBlogs = function(){
    return blogs;
  };
  return {
    getBlogs : _getBlogs
  };
});

// app.factory("Github", function ($window) {
//   return $window.Github;
// });
