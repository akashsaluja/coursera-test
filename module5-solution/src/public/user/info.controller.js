(function() {

    "use strict";
    angular.module('public')
    .controller('InfoController', InfoController);


    InfoController.$inject = ['userInfo', 'ApiPath'];

    function InfoController(userInfo, ApiPath) {
        var $ctrl = this;
        if (userInfo === null) {
            $ctrl.dataPresent = false;
        } else {
            $ctrl.dataPresent = true;
        }
        $ctrl.user = userInfo;
        $ctrl.basePath = ApiPath;
    }



})();