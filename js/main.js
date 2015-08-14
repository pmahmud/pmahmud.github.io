
/**
 * Main AngularJS Web Application
 */
var app = angular.module('pmahmudApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider, $locationProvider) {
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
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope) {
  $scope.BlogCtrl = this;
  angular.extend($scope.BlogCtrl,{
    title: "My blogs"
  });
  console.log('blog');
});

app.controller('MainCtrl', function ($log) {
  console.log("Page Controller reporting for duty.");
});

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});


// app.factory("Github", function ($window) {
//   return $window.Github;
// });
