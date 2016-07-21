'use strict';

/**
 * @ngdoc overview
 * @name angularprojectApp
 * @description
 * # angularprojectApp
 *
 * Main module of the application.
 */

/*angular.module('angularprojectApp', []).config(['$locationProvider', function($locationProvider)
{
$locationProvider.html5Mode(true);
}]);*/

angular
  .module('angularprojectApp',  [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])


  .config(function ($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })

      .otherwise({
        redirectTo: '/'
      })
      /*$routeProvider.html5Mode(true);*/
      $locationProvider.hashPrefix('!');
      
  });

  /*angular.module('angularprojectApp', ['ngRoute'])
  .config(['$locationProvider', function($locationProvider) 
  {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }
 ]);*/

 // server.js
             
var express = require('express');

var app = module.exports = express();

app.configure(function(){ 
  // Here we require the prerender middleware that will handle requests from Search Engine crawlers 
  // We set the token only if we're using the Prerender.io service 
  app.use(require('prerender-node').set('prerenderToken', '2rXtEDGLMsDLnlGl7zMT')); 
  app.use(express.static("app")); app.use(app.router); 
});

// This will ensure that all routing is handed over to AngularJS 
app.get('*', function(req, res){ 
  res.sendfile('./app/index.html'); 
});

app.listen(8081); 
console.log("Go Prerender Go!");

  function MainCtrl($scope) { 
  // We will create an seo variable on the scope and decide which fields we want to populate 
  $scope.seo = { 
    pageTitle : 'Home', pageDescription : '' 
  }; 
}

function AboutCtrl($scope) { 
  // For this tutorial, we will simply access the $scope.seo variable from the main controller and fill it with content. 
  // Additionally you can create a service to update the SEO variables - but that's for another tutorial. 
  $scope.$parent.seo = { 
    pageTitle : 'About', 
    pageDescripton: 'Welcome to our tutorial on getting your AngularJS websites and apps indexed by Google.' 
  }; 
}

function ContactCtrl($scope) { 
  $scope.$parent.seo = { pageTitle : 'Contact', 
    pageDescripton: 'We are a content heavy website so we need to be indexed.' 
  }; 
}

