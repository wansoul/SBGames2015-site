angular.module('sbgamesApp')
	.controller('AnaisController', 
		function AnaisController($http, AnaisService){
			'use strict';
			var anais = this;

			var promise = AnaisService.getLista();
			promise.then(function(data){
				
				/* CARTES E DESIGN */
				anais.artesedesignFull = $.map(data, function(el) { 
					if(el.categoria == "artesedesign-full")
						return el; 
				});
				anais.artesedesignShort = $.map(data, function(el) { 
					if(el.categoria == "artesedesign-short")
						return el; 
				});

				/* COMPUTACAO */
				anais.computacaoFull = $.map(data, function(el) { 
					if(el.categoria == "computacao-full")
						return el; 
				});
				anais.computacaoShort = $.map(data, function(el) { 
					if(el.categoria == "computacao-short")
						return el; 
				});

				/* CULTURA */
				anais.culturaFull = $.map(data, function(el) { 
					if(el.categoria == "cultura-full")
						return el; 
				});
				anais.culturaShort = $.map(data, function(el) { 
					if(el.categoria == "cultura-short")
						return el; 
				});

				/* INDUSTRIA */
				anais.industriaFull = $.map(data, function(el) { 
					if(el.categoria == "industria-full")
						return el; 
				});
				anais.industriaShort = $.map(data, function(el) { 
					if(el.categoria == "industria-short")
						return el; 
				});

				/* TUTORIAIS */
				anais.tutoriais = $.map(data, function(el) { 
					if(el.categoria == "tutoriais")
						return el; 
				});



			});

		});

