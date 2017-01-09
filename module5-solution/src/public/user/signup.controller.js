(function() {
    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService', 'MenuService'];
    function SignUpController(SignUpService, MenuService) {
        var $ctrl = this;
        $ctrl.success = null;
        $ctrl.submit = function() {
            promise = MenuService.getMenuItem($ctrl.user.favItem);
            promise.then(function (response) {
                    $ctrl.success = true;
                    // console.log(response);
                    $ctrl.user.dish = {}
                    $ctrl.user.dish.description = response.data.description;
                    $ctrl.user.dish.title = response.data.name;
                    SignUpService.saveSignUpInfo($ctrl.user);
                    return response;
                }, function(response) {
                    $ctrl.success = false;
                    
                    return response
                });
            
            
        }

    }

})();