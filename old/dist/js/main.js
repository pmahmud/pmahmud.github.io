
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
app.controller('BlogCtrl', function ($scope, BlogFactory, $log) {
  $scope.BlogCtrl = this;
  angular.extend($scope.BlogCtrl,{
    title: "My blogs",
    blogs: BlogFactory.getBlogs(function(blogs){
      $log.info(blogs);
    })
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
  $log.info('calling _getBlogs()');
  var jsonURL = 'https://raw.githubusercontent.com/pmahmud/pmahmud.github.io/master/blog/list.json';
  //var blogs = {};


  var _getBlogs = function(callback){
    $http.get(jsonURL).then(function(response){
      try{
        var blogs = angular.fromJson(response.data.blogs);
        $log.info(response);
        callback(blogs);
      }catch(error){
        //handleError
      }
    }, function(response){
      //handleError
    });
//    return blogs;
  };

  _getBlogs(function(data){
    $log.info('calling _getBlogs()');
  });

  return {
    getBlogs : _getBlogs
  };
});

// app.factory("Github", function ($window) {
//   return $window.Github;
// });
