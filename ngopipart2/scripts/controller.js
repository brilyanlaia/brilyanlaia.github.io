angular
    .module('ngopiApp')
    .controller('ngopiController', function($scope, cafeFactory, $http) {
        

        $http.defaults.headers.get = {'accept':'application/json','user-key':'aee7c4d5018cc3b829b688da0c6d3b72'};

      // $scope.cafes = cafeFactory.query();

       $scope.cafes;
       $scope.cafees;
       $scope.cafeees;
       $scope.filtercafe ='';

       cafeFactory.getCafes().then(function(data) {
        $scope.cafes = data.data;
        console.log($scope.cafes = data.data.restaurants);
       }, function(error) {
        console.log(error)
       });


       
       cafeFactory.getCafees().then(function(data) {
        $scope.cafees = data.data;
        console.log($scope.cafees = data.data.restaurants);
       }, function(error) {
        console.log(error)
       });
       

       cafeFactory.getCafeees().then(function(data) {
        $scope.cafeees = data.data;
        console.log($scope.cafeees = data.data.restaurants);
       }, function(error) {
        console.log(error)
       });
       


       


       
    });