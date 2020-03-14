angular.module('wnApp')
.factory('wnFactory', function($http,$stateParams){

  

    function getMovies(){
       return $http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=f04465256249a3b2187f268f11e30546&language=en-US&page=1');
    }

    function getDetails(){
        console.log("details: "+$stateParams.id);
       return $http.get('https://api.themoviedb.org/3/movie/'+$stateParams.id+'?api_key=f04465256249a3b2187f268f11e30546&language=en-US');
    }
    function getPopular(){
       return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=f04465256249a3b2187f268f11e30546&language=en-US&page=1');
    }
    function getUpcoming(){
       return $http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=f04465256249a3b2187f268f11e30546&language=en-US&page=1&region=ID');
    }
    function getRecom(){
        console.log("recom: "+$stateParams.id);
       return $http.get('https://api.themoviedb.org/3/movie/'+$stateParams.id+'/recommendations?api_key=f04465256249a3b2187f268f11e30546&language=en-US&page=1');
      
    }


    return{
        getMovies : getMovies,
        getDetails : getDetails,
        getPopular : getPopular,
        getUpcoming: getUpcoming,
        getRecom: getRecom,
    }
    
})