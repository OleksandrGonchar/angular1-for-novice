(function () {
    'use strict';


    angular.module('app')
        .controller('Todo', Todo);

    Todo.$inject = ['model', 'todoService'];
    function Todo(model, todoService) {
        let $ctrl = this;
        $ctrl.todo = model;
        $ctrl.showComlete = true;

        Object.assign($ctrl, todoService);
    }

})();
