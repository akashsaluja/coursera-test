(function() {
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController ($scope) {
        $scope.buttonClicked = function () {
            var dishesEaten = $scope.dishes;
            var count  = countNumberOfCommas(dishesEaten);
            if(count === 0) {
                $scope.messageToUser = 'Please enter data first';
            } else if(count > 3){
                $scope.messageToUser = 'Too much!';
            } else {
                $scope.messageToUser = 'Enjoy!';
            }
        }


    }

    function countNumberOfCommas(dishesEaten) {
        if(dishesEaten) { 
            return dishesEaten.split(',').length;
        }
        return 0;
    }

})();