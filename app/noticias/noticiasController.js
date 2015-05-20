angular.module('sbgamesApp')
	.controller('NoticiasController', 
		function noticiasController($rootScope, UtilsService, $routeParams, NoticiasService, $q){
			'use strict';
			$rootScope.currentPage = "noticias";
			$rootScope.currentSubPage = "";
			UtilsService.resetScroll(); 

			var este = this;

			var promise = NoticiasService.getNoticias();
			promise.then(function(data){
				este.noticias = data;
				console.log(este.noticias);
				
				var id = $routeParams.id;
				if(id){
					for (var i = 0; i < este.noticias.length; i++) {	
						if (este.noticias[i].id == id){
							este.noticiaSelecionada = este.noticias[i];
						}
					}
				} else {
					este.noticiaSelecionada = este.noticias[este.noticias.length-1];
				}

			});

			
		})