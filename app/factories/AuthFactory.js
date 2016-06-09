'use strict';

NotDolls.factory('AuthFactory', [

	function () {

		var currentUser = null;

		return {
			getUser () {
				return currentUser;
				})
			},
			setUser (user) {
				currentUser = user;
			}
		}

	}
]);