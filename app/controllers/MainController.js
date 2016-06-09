NotDolls.controller('MainController', [
    '$http', 
    '$scope',

    function($http, $scope) {
        console.log("thing");
        $http
        .get('http://localhost:5000/api/Inventory')
        .success(results => $scope.figurine = results);
    }
]);