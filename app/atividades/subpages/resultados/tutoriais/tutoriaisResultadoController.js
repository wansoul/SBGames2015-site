angular.module('sbgamesApp')
	.controller('TutoriaisResultadoController', 
		function tutoriaisResultadoController($http, TutoriaisResultadosService){
			'use strict';
			var tutoriais = this;

			var promise = TutoriaisResultadosService.getResultados();
			promise.then(function(data){
				tutoriais.resultados = data;
			});

		});

