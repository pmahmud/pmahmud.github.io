
/**
 * Main AngularJS Web Application
 */
var app = angular.module('pmahmudApp', [
  'ngRoute',
  'Github'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "MainCtrl"})
    .otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);




/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});

app.controller('MainCtrl', function (Github, $log) {
  var repo = github.getRepo('pmahmud', 'pmahmud');
  repo.contents('gh-pages', "partials", function(err, contents) {
    $log.info(contents);
  });
  console.log("Page Controller reporting for duty.");
});

app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");
});
