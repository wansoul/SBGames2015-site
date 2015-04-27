angular.module('sbgamesApp')
	.controller('CfpController', 
		function CfpController($rootScope, UtilsService, $routeParams){
			'use strict';
			this.selected = $routeParams.id;
			$rootScope.currentPage = "callforpapers";
			$rootScope.currentSubPage = $routeParams.id;
			UtilsService.resetScroll(); 
		});