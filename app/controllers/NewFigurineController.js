'use strict'

NotDolls.controller('NewFigurineController', [
    '$http', 
    '$scope',
    'AuthFactory'

    function($http, $scope, authFactory) {
        
    	$scope.figurine = {
    		geekId: 4
    	};

	    $scope.createFigurine = function () {
	    	console.log("helloooodsosd", $scope.figurine)
			$scope.figurine.createdDate = new Date();
	        $http({        	
	        	url: 'http://localhost:5000/api/Inventory',
	        	method: 'POST',
	        	data: JSON.stringify($scope.figurine)
	        })
	        .success(results => console.log('created', results));
    	};
	}
]);