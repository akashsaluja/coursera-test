(function() {
    angular.module('MenuApp')
     .config(RoutesConfig);


     RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
     function RoutesConfig($stateProvider, $urlRouterProvider) {
         
         
         $urlRouterProvider.otherwise('/');

         // Setting up states
         $stateProvider
         .state('home', {
             url: '/',
             templateUrl: '../ui/home.html'
         })
         .state('categories', {
             url: '/categories',
             templateUrl: '../ui/categories.html',
             controller: 'MenuAppController as mainList',
             resolve: {
                 CategoryData: ['MenuDataService', function(Service) {
                     var items = []
                     return Service.getAllCategories().then(
                            function(response) {
                                items = response.data;
                                return items;
                            }
                     )
                     
                 }]
             }
         })
         .state('items', {
             url: '/items/{category}',
             templateUrl: '../ui/items.html',
             controller: 'MenuAppController as itemList',
             resolve: {
                 CategoryData: ['$stateParams', 'MenuDataService', function($stateParams, Service) {
                     var items = []
                     return Service.getItemsForCategory($stateParams.category).then(
                            function(response) {
                                items = response.data.menu_items;
                                return items;
                            }
                     )
                     
                 }]
             }
         });
     }
})()     