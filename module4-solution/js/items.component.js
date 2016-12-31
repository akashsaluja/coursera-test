(function() {
    angular.module('MenuApp')
    .component('items', {
        
        templateUrl: './ui/item_view.html',
        bindings: {
            categoryItems: '<'
        }
    });



})()