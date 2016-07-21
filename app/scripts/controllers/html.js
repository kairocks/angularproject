'use strict';
/*angular.module('HTML5ModeURLs', [])
 .config(['$routeProvider', function($route)
 {
	$route.html5Mode(true);
 }
 ]);*/
 angular.module('angularprojectApp').config([  
    '$locationProvider',
    function($locationProvider) {
      	/*$locationProvider.html5Mode(true);*/
        $locationProvider.hashPrefix('!');

    }
]);