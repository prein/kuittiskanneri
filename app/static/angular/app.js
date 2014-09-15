// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'ngCookies',
    'myApp.filters',
    'myApp.directives',

    // Views / Features
    'myApp.home',
    'myApp.upload',
    'myApp.register',
    'myApp.receipt',
    'myApp.navbar',
    'myApp.root',
    'myApp.userAuthentication'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'angular/root/root.html', controller: 'RootController'});
        $routeProvider.when('/register', {templateUrl: 'angular/register/register.html', controller: 'RegisterController'});
        $routeProvider.when('/home', {templateUrl: 'angular/home/home.html', controller: 'HomeController'});
        $routeProvider.when('/upload', {templateUrl: 'angular/upload/upload.html', controller: 'UploadController'});
        $routeProvider.when('/receipt', {templateUrl: 'angular/receipt/receipt.html', controller: 'ReceiptController'});
        $routeProvider.when('/about', {templateUrl: 'angular/about/about.html'});
        $routeProvider.otherwise({redirectTo: '/'});
    }])
    .run(function($logincheck, $location, $cookies, userService) {
        if (!$cookies.authdata) {
            console.log("User not logged in, redirecting to index");
            $location.path('/');
        } else
        {
            console.log("Cookie found, logging in");
            userService.loginUser();
            $location.path('/home');
        }
    });
