var app = angular.module('wnApp',['ui.router']);




app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state("home", {
        url: "/",
        templateUrl : "home.html",
        controller : "wnController",
       
        
        
    })
    .state("about", {
        url: "/about",
        templateUrl : "aboutme.html",
        controller : "wnController",
        
        
        
    })
    .state("memberarea", {
        resolve:{
            "check": function($location){
                if(sessionStorage.getItem('logged') == 'true' ) {
                    console.log('sudahlogin');
                    
                }else{
                    console.log("belom");
                    swal({
                        title: "Not Authorized",
                        text: "You need to login to view this page.",
                        icon: "error",
                      });
                    $location.path('/');
                    
                }
            }
        },
        url: "/memberarea",
        templateUrl : "member.html",
        param :{
            id: null,
           
        }
       
    })
    .state("details",{
        resolve:{
            "check": function($location){
                if(sessionStorage.getItem('logged') == 'true' ) {
                    console.log('sudahlogin');
                    
                }else{
                    console.log("belom");
                    swal({
                        title: "Not Authorized",
                        text: "You need to login to view this page.",
                        icon: "error",
                      });
                    $location.path('/');
                    
                }
            }
        },
        url: "/details/:id",
        templateUrl: "details.html",
        controller: "detailsCtrl",
        param :{
            id: null,
           
        }
    })


    
});

