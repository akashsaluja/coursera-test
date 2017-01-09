(function () {
    angular.module('public')
    .service('SignUpService', SignUpService);

    function SignUpService() {
        var service = this;
        service.userInfo = null;
        this.saveSignUpInfo = function (userInfo) {
            service.userInfo = userInfo;
        }
    }

})();