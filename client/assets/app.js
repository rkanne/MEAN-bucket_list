var app = angular.module('app', ['ngRoute','ngCookies']);
app.config(function ($routeProvider) {
// Routes to load your new and edit pages with new and edit controllers attached to them!
	$routeProvider
	 	.when('/',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/dashboard',{
            templateUrl: 'partials/dashboard.html'
        })
        .when('/register',{
            templateUrl: 'partials/main.html',
            controller: 'usersController'
        })
        .when('/login',{
            templateUrl: 'partials/main.html'
        })
         .when('/logout',{
            templateUrl: 'partials/main.html'
        })
         .when('/add_list',{
            templateUrl: 'partials/dashboard.html'
        })
         .when('/all_users',{
            templateUrl: 'partials/dashboard.html'
        })
         .when('/all_lists',{
            templateUrl: 'partials/dashboard.html'
        })
         .when('/user/:id',{
            templateUrl: 'partials/user.html'
        })
         .when('/tag',{
            templateUrl: 'partials/dashboard.html'
        })

 
        .otherwise({
          redirectTo: '/'
        });
    });