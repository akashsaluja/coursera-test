(function () {
    angular.module('Module2App', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    // Question: Can we have singleton through provider also

    ToBuyController.$inject = ['ShoppingListCheckOffService']
    function ToBuyController(ShoppingListCheckOffService) {
        var to = this;

        to.items = ShoppingListCheckOffService.toBeAdded;
        console.log(to.items);

        to.bought = function (index) {
            console.log(index);
            ShoppingListCheckOffService.buyItem(index);
        }

    }

    AlreadyBoughController.$inject = ['ShoppingListCheckOffService']
    function AlreadyBoughController(ShoppingListCheckOffService) {
        var already = this;

        already.items = ShoppingListCheckOffService.alreadyAdded;
    }





    function ShoppingListCheckOffService () {
        var service = this;
        service.alreadyAdded = []

        var defaultItems = [
            {
                name: "cookies",
                quantity: 5 
            },
            {
                name: "candies",
                quantity: 10 
            },
            {
                name: "chocolates",
                quantity: 20 
            },
            {
                name: "cashews",
                quantity: 40
            },
            {
                name: "almonds",
                quantity: 25
            }
        ];

        service.toBeAdded = defaultItems;
        service.buyItem = function (index) {
            var item = service.toBeAdded[index];
            service.toBeAdded.splice(index, 1);
            service.alreadyAdded.push(item);
        }

    }


})();