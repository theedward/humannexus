angular.module('humannexusApp', ['ngCookies'])
	.controller('writeCookie', ['$scope', '$cookies', function ($scope, $cookies) {
		
		$scope.sendMessage = function () {
			var name = $('#name').val();
			var email = $('#email').val();
			var message = $('#message').val();
			
			$cookies.put('message', 'Name: ' + name + ", Email: " + email + ", Message: " + message);
		};
	}])
	
	.controller('readCookie', ['$scope', '$cookies', function ($scope, $cookies) {
		$scope.message = $cookies.get('message');
		
	}]);

