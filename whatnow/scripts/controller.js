angular.module('wnApp')
.controller('wnController', function($scope, wnFactory, $location, $rootScope){


    localStorage.setItem('user','test');
    localStorage.setItem('pass','test');

    $rootScope.logged = sessionStorage.getItem('logged');

    $scope.submit = function() {
        var default_name = localStorage.getItem('user');
        var default_pw = localStorage.getItem('pass');
    
    
        if($scope.uname === default_name && $scope.pw === default_pw){
            $rootScope.logged = true;

            sessionStorage.setItem('logged','true');
            swal("Login success","", "success");
            $location.path('/memberarea');
            console.log('success');
        }else{

            swal({
                title: "Login Failed",
                text: "No User exist / Wrong Combination of User & Password",
                icon: "warning",
              });
            
            console.log('fail');
        }
    
    }

    $scope.logout = function(){
        sessionStorage.removeItem('logged');
        console.log('logout berhasil');
        $location.path('/');
    }
        


    //json data from api start here

    //nowplaying

   wnFactory.getMovies().then(function(data){
       $scope.movies = data.data.results;
   },function(error){
       console.log(error)
   });

   //popular

   wnFactory.getPopular().then(function(data){
       $scope.popular = data.data.results;
   },function(error){
       console.log(error)
   });

   //upcoming 
   wnFactory.getUpcoming().then(function(data){
       $scope.upcoming = data.data.results;
   },function(error){
       console.log(error)
   });

   





})




angular.module('wnApp')
.controller('detailsCtrl', function($stateParams,$scope,wnFactory) {
   
    $scope.movieID= $stateParams.id;
    console.log($scope.movieID);


   

    wnFactory.getDetails().then(function(data){
        $scope.details = data.data;
    },function(error){
        console.log(error)
    });

    //recommendation
   wnFactory.getRecom().then(function(data){
    $scope.recom = data.data.results;
},function(error){
    console.log(error)
});
   



  });