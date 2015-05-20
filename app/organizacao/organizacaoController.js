angular.module('sbgamesApp')
	.controller('OrganizacaoController', 
		function organizacaoController($http){
			'use strict';
			var org = this;
			$http.get("app/organizacao/membros_categorias.json").success( 
				function(response){
					console.log(response);
					org.organizacao = response.organizacao;
				}
			);
		});