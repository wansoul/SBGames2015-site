angular.module('sbgamesApp')
	.controller('IndexController', 
		function IndexController($rootScope, UtilsService){
			'use strict';
			UtilsService.resetScroll();
			$rootScope.currentPage = "inicio";
			$rootScope.currentSubPage = "";
		});