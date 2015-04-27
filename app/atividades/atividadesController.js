angular.module('sbgamesApp')
	.controller('AtividadesController', 
		function AtividadesController($rootScope, UtilsService, $routeParams){
			'use strict';
			this.selected = $routeParams.id;
			$rootScope.currentPage = "atividades";
			$rootScope.currentSubPage = $routeParams.id;
			UtilsService.resetScroll(); 
		});