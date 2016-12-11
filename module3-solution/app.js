(function () {

    'use strict';

    angular.module('NarrowItDownApp', [])
    .constant('MenuListBasePath', " https://davids-restaurant.herokuapp.com/")
    .controller('NarrowItDownController', NarrowItDownController)
    .directive('foundItems', FoundItemsDirective)
    .service('MenuSearchService', MenuSearchService);


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;
        controller.text = '';
        controller.found = [];
        controller.foundSize = -1;

        controller.clear = function() {
            // controller.found=[];
            // controller.foundSize = 0;
        }

        controller.getMatchedMenuItems = function (searchTerm) {
            console.log(searchTerm);
            if(searchTerm) {
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
                promise.then(function (list) {
                    // console.log(list[0].id);
                    controller.found = list;
                    controller.foundSize = list.length;
                })
            } else {
                controller.found = [];
                controller.foundSize = 0;
            }
            
        };

        controller.removeItem = function (index) {
            console.log(index);
            console.log('Removing', index);
            controller.found.splice(index, 1);
            controller.foundSize--;
        }
    }




    MenuSearchService.$inject = ['$http', 'MenuListBasePath']
    function MenuSearchService($http, MenuListBasePath) {
        var service = this;
        service.getMatchedMenuItems = function (searchTerm) {
            var promise = $http({
                method: 'GET',
                url: MenuListBasePath + 'menu_items.json'
            });
            return promise.then(
                function(response) {
                    console.log(response);
                    var data = response.data;
                    var items = [];
                    for(var item in data.menu_items) {
                        if(data.menu_items[item].description.search(searchTerm) != -1) {
                            items.push(data.menu_items[item]);
                        }
                    }
                    
                    return items;
                }
            ).catch(function(error) {
                console.log(error);
            });
            
        };
        

    };

    function FoundItemsDirective() {
        var ddo = {
            templateUrl: 'display.html',
            restrict: 'E',
            link: DisplayMessageLink,
            scope: {
                foundItems: '<foundItems',
                removeItem: '&',
                foundSize: '=foundSize'
            }
        }
        return ddo;
    }

    function DisplayMessageLink(scope, element, attrs, controller) {
        scope.$watch('foundSize', function (newValue, oldValue) {
            console.log("Old value: ", oldValue);
            console.log("New value: ", newValue);


            if (newValue === 0) {
                displayMessage();
            }  
             else {
                hideMessage();
            }

         });

         function displayMessage() {
            var warningElem = element.find("div.message");
            warningElem.slideDown(900);
        }

        function hideMessage() {
            var warningElem = element.find("div.message");
            warningElem.slideUp(900);
        }
    }
    


})();