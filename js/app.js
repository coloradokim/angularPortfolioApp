var app = angular.module("portfolioApp", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .otherwise({
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
});
