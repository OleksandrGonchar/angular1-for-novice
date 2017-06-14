(function () {
    'use strict';


    angular.module('app')
        .factory('todoService', todoService);

    todoService.$inject = ['$http', '$q'];
    function todoService($http, $q) {
        return {
            incompliteCount,
            warningLevel,
            addNewItem,
            getItems
        };

        function incompliteCount(items) {
            let count = 0;

            angular.forEach(items, (item) => {
                if(!item.done) {
                    count++;
                }
            });

            return count;
        }

        function getItems() {
            return $http.get('data/todo.json')
                .then(response => response.data)
                .catch(() => $q.reject('Error: can\'t take task list'));
        }

        function addNewItem(items, newItem) {
            if (newItem && newItem.action) {
                items.push({
                    action: newItem.action,
                    done: false
                });
                newItem.action = '';
            }
        }

        function warningLevel(items) {
            return incompliteCount(items) < 3
                ? 'label-success': 'label-warning'
        }
    }

})();
