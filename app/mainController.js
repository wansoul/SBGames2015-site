angular.module('sbgamesApp')
	.controller("MainController", function 
		MainController($scope, $location) {
			$scope.menuClass = function(page) {
			var current = $location.path().substring(1);
			return page === current ? "active" : "";
		};
	});