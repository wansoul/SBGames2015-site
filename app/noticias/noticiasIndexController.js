angular.module('sbgamesApp')
	.controller('NoticiasIndexController', 
		function noticiasIndexController($rootScope, NoticiasService, $q){
			'use strict';

			var este = this;

			var promise = NoticiasService.getNoticias();
			promise.then(function(data){
				if(data.length > 3){
					este.noticias = data.slice( 0, 3 );
				} else {
					este.noticias = data;
				}
			});
			
		});
