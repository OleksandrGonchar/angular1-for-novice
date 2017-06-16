(function () {
    "use strict";

    angular.module('app')
        .directive('viTaskList', viTaskList);

    function viTaskList() {
        const directive = {
            restrict: 'E',
            templateUrl: 'directives/task-list/task-list.directives.html'
        };

        return directive;
    }

})();