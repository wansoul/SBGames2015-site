angular.module('sbgamesApp')
	.controller('CulturaResultadoController', 
		function culturaResultadoController($http, CulturaResultadosService){
			'use strict';
			var cultura = this;

			var promise = CulturaResultadosService.getResultados();
			promise.then(function(data){
				cultura.resultados = data;
			});

		});

