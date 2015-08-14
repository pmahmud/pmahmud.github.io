
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
    .when("/blog", {
      templateUrl: "partials/blog.html",
      controller: "BlogCtrl"
    })
    .otherwise("/404", {
      templateUrl: "404.html",
      controller: "PageCtrl"
    });
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope, BlogFactory, $log) {
  $scope.BlogCtrl = this;
  var _initBlogCtrl = function(){
    // this.blogs = [];
    BlogFactory.getAllBlogs(function(blogs){
      // this.blogs = blogs;
      $log.info(blogs);
      $scope.BlogCtrl.blogs= blogs;
    });

  };
  var _getBlog = function(blog){
    BlogFactory.getBlog(blog.file, function(fileContent){
      $log.info(fileContent);
    });
  };

  _initBlogCtrl();
  angular.extend(this,{
    title: "My blogs",
    getBlog: _getBlog
  });
});

app.controller('MainCtrl', function ($log) {
  console.log("Page Controller reporting for duty.");
});

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});

app.factory('BlogFactory', function($http, $log){
  var url = 'https://raw.githubusercontent.com/pmahmud/pmahmud.github.io/master/blog/';
  var jsonURL = 'https://raw.githubusercontent.com/pmahmud/pmahmud.github.io/master/blog/list.json';
  //var blogs = {};


  var _getAllBlogs = function(callback){
    $http.get(jsonURL).then(function(response){
      // $log.info(response);
      try{
        var blogs = angular.fromJson(response.data.blogs);
        callback(blogs);
      }catch(error){
        //handleError
      }
    }, function(response){
      //handleError
    });
  };

  // _getBlogs(function(data){
  //   $log.info('calling _getBlogs()');
  //   $log.log(data);
  // });

  var _getBlog = function(file, callback){
    $http.get( url + file ).then(function(response){
      var blogContent = response.data;
      callback(blogContent);
    }, function(response){
      //handleError
    });

  };

  return {
    getAllBlogs : _getAllBlogs,
    getBlog: _getBlog
  };
});

// app.factory("Github", function ($window) {
//   return $window.Github;
// });
