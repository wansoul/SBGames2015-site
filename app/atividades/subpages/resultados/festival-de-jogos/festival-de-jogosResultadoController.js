angular.module('sbgamesApp')
	.controller('FestivalDeJogosResultadoController', 
		function FestivalDeJogosResultadoController($http, FestivalDeJogosResultadosService){
			'use strict';
			var festival = this;

			var promise = FestivalDeJogosResultadosService.getResultados();
			promise.then(function(data){
				festival.resultados = data;
			});

		});

