angular.module('sbgamesApp')
	.controller('ComputacaoResultadoController', 
		function computacaoResultadoController($http, ComputacaoResultadosService){
			'use strict';
			var computacao = this;

			var promise = ComputacaoResultadosService.getResultados();
			promise.then(function(data){
				computacao.resultados = data;
			});

		});

