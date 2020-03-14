
var app = angular.module('ngopiApp',['ngRoute','ngAnimate']);

app.run(['$rootScope','$location','$window', function ($rootScope, $location, $window){


    $rootScope.go = function (path, pageAnimationClass) {

        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $rootScope.pageAnimationClass = 'crossFade';
        }
        
        else { // Use the specified animation
            $rootScope.pageAnimationClass = pageAnimationClass;
        }

        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        }
        
        else { // Go to the specified path
            $location.path(path);
        }
    };
}]);



app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
        controller : "ngopiController"
        
        
    })
    .when("/content", {
        templateUrl : "content.html"
       // controller : "ngopiController",
        //caseInsensitiveMatch : true
    })
    .when("/content2", {
        templateUrl : "content2.html"
      // controller : "ngopiController2"
        //caseInsensitiveMatch : true
    })
    .when("/content3", {
        templateUrl : "content3.html"
      // controller : "ngopiController2"
        //caseInsensitiveMatch : true
    })
    .when("/details", {
        templateUrl : "details.html",
        controller : "ngopiController"
       
    })
    .when("/about",{
        templateUrl : "about.html"
    });
});


