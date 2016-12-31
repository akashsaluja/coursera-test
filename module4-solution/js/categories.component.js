(function() {
    angular.module('MenuApp')
    .component('categories', {
        // fill in details
        // controller: CategoryController,
        templateUrl: '../ui/category_view.html',
        bindings: {
            categoryList: '<'
        }
    });


   

    // CategoryController.$inject = ['MenuDataService']
    // function CategoryController(MenuDataService) {
    //     var $ctrl = this;
    //     $ctrl.title = 'hello';

    //     var categoryDescription = this;
    //     //  categoryDescription.items = [];
    //     //  categoryDescription.$onInit = function() {
    //     //      MenuDataService.getAllCategories().then(
    //     //      function(response) {
    //     //          console.log(response)
    //     //      });
    //     // }
    // }

    
})()