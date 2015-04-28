angular.module('sbgamesApp')
	.controller('TrilhasController', 
		function trilhasController($rootScope, UtilsService, $routeParams){
			'use strict';
			this.selected = $routeParams.id;
			$rootScope.currentPage = "trilhas";
			$rootScope.currentSubPage = $routeParams.id;
			UtilsService.resetScroll(); 
		});