(function(){
    angular.module('MenuApp')
    .service('MenuDataService', MenuDataService)
    .constant('baseUri', 'https://davids-restaurant.herokuapp.com/');


    MenuDataService.$inject = ['$http', 'baseUri']

    function MenuDataService($http, baseUri) {
        var service = this;
        service.getAllCategories = function() {
            return $http({
                method: 'GET',
                url: baseUri + 'categories.json'
            });
            
        }

        service.getItemsForCategory = function(categoryShortName) {
            console.log(categoryShortName);
            return $http({
                method: 'GET',
                url: baseUri + 'menu_items.json',
                params: {'category': categoryShortName}
            });
        }

        }



    }



)()