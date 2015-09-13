angular.module('sbgamesApp')
	.controller('IndustriaResultadoController', 
		function industriaResultadoController($http, IndustriaResultadosService){
			'use strict';
			var industria = this;

			var promise = IndustriaResultadosService.getResultados();
			promise.then(function(data){
				industria.resultados = data;
			});

		});

