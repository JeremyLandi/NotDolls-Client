'use strict'

NotDolls.controller('RegisterController', [
    '$http', 
    '$scope',

	function($http, $scope) {

		$scope.githubOauth = function () {

			OAuth.initialize('xm_nGJE9-dEr9tnbJStXhO5B_s4')
			OAuth.popup('github').done(function(result) {
			    console.log(result)
			    // do some stuff with result

				result.me().done(function(data) {
				    // do something with `data`, e.g. print data.name
				    console.log(data)

					$http({
						url: "http://localhost:5000/api/Geek",
						method: "POST",
						data: JSON.stringify({
							username: data.alias,
							location: data.location,
							email: data.email,
							createdDate: new Date()
						})
					}).then(
					response => {
						var theGeek = response.data[0];
						authFactory.setUser(theGeek);	
						console.log('resolve fired', theGeek);
					},
					response => {						
						console.log('resolve fired', response);

						// Geek has already been created
						if (response.status === 409) {	
							$http.get('http://localhost:5000/api/Geek?username=${data.alias}')
							.then(
								response => { 
									var theGeek = response.data[0];
									console.log("Found the Geek", theGeek)
									authFactory.setUser(theGeek);
								},
								response => { console.log("could not find that Geek", response)
								}
							)
						}
					})
				})    
			});
		};
	}
]);