
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

  $locationProvider.html5Mode(true);  
}]);




/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function ($scope) {
  $scope.BlogCtrl = this;
  angular.extend($scope.BlogCtrl,{
    title: "My blogs"
  });

});

app.controller('MainCtrl', function (Github, $log) {
  var repo = Github.getRepo('pmahmud', 'pmahmud');
  repo.contents('gh-pages', "partials", function(err, contents) {
    $log.info(contents);
  });
  console.log("Page Controller reporting for duty.");
});

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});


app.factory("Github", function ($window) {
  // the if check is unnecessary since an undefined
  // is returned anyway when the Snap doesn't exist.
  return $window.Github;
});
