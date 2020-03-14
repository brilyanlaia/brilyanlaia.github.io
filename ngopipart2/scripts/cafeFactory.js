angular
    .module('ngopiApp')
    .factory('cafeFactory', function($http){

        function getCafes(){
            return $http.get('https://developers.zomato.com/api/v2.1/search?start=0&entity_id=78065&entity_type=subzone&lat=-6.2568587&lon=106.618485&category=6');
        }
        function getCafees(){
            return $http.get('https://developers.zomato.com/api/v2.1/search?start=21&entity_id=78065&entity_type=subzone&lat=-6.2568587&lon=106.618485&category=6');
        }
        function getCafeees(){
            return $http.get('https://developers.zomato.com/api/v2.1/search?start=41&entity_id=78065&entity_type=subzone&lat=-6.2568587&lon=106.618485&category=6');
        }


        return {
            getCafes: getCafes,
            getCafees: getCafees,
            getCafeees: getCafeees

        }

    });
