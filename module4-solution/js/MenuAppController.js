(function() {
    angular.module('MenuApp')
    .controller('MenuAppController', MenuAppController);

    MenuAppController.$inject = ['CategoryData']
    function MenuAppController(CategoryData) {
        var mainList = this;
         mainList.items = CategoryData;
         console.log(mainList.items)
        //  mainList.$onInit = function() {
        //      MenuDataService.getAllCategories().then(
        //      function(response) {
        //          mainList.items = response.data;
        //      });
        // }
    }

})()