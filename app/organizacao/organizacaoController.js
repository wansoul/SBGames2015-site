angular.module('sbgamesApp')
	.controller('OrganizacaoController', 
		function organizacaoController($http){
			'use strict';
			var org = this;
			$http.get("app/organizacao/membros.json").success( 
				function(response){
					org.membros = response.membros;
				}
			);
		});