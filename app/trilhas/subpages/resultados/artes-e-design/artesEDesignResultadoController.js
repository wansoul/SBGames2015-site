angular.module('sbgamesApp')
	.controller('ArtesEDesignResultadoController', 
		function artesEDesignResultadoController($http, ArtesEDesignResultadosService){
			'use strict';
			var artesEDesign = this;

			var promise = ArtesEDesignResultadosService.getResultados();
			promise.then(function(data){
				artesEDesign.resultados = data;
			});

		});

