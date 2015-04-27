'use strict';

var app = angular.module('sbgamesApp', ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider){
		'use strict';
		$routeProvider
			.when('/', {
				templateUrl: 'app/index/indexTemplate.html',
				controller: 'IndexController'
			})
			.when('/inicio', {
				templateUrl: 'app/index/indexTemplate.html',
				controller: function(UtilsService, $rootScope){ 
					UtilsService.resetScroll(); 
					$rootScope.currentPage = "home";
					$rootScope.currentSubPage = "";
				}
			})
			.when('/callforpapers', {
				redirectTo: '/callforpapers/artedesign'
			})
			.when('/callforpapers/:id', {
				templateUrl: 'app/cfp/cfpTemplate.html',
				controller: 'CfpController'
			})
			.when('/atividades', {
				redirectTo: '/atividades/tutoriais'
			})
			.when('/atividades/:id', {
				templateUrl: 'app/atividades/atividadesTemplate.html',
				controller: 'AtividadesController'
			})
			.when('/submissoes', {
				templateUrl: 'app/submissoes/submissoesTemplate.html',
				controller: function(UtilsService, $rootScope){ 
					UtilsService.resetScroll(); 
					$rootScope.currentPage = "submissoes";
					$rootScope.currentSubPage = "submissoes";
				}
			})
			.when('/organizacao', {
				templateUrl: 'app/organizacao/organizacaoTemplate.html',
				controller: function(UtilsService, $rootScope){ 
					UtilsService.resetScroll(); 
					$rootScope.currentPage = "organizacao";
					$rootScope.currentSubPage = "";
				}
			})
			.when('/local', {
				templateUrl: 'app/local/localTemplate.html',
				controller: function(UtilsService, $rootScope){ 
					UtilsService.resetScroll(); 
					$rootScope.currentPage = "local";
					$rootScope.currentSubPage = "";
				}
			})
			.when('/contato', {
				templateUrl: 'app/contato/contatoTemplate.html',
				controller: function(UtilsService, $rootScope){ 
					UtilsService.resetScroll(); 
					$rootScope.currentPage = "contato";
					$rootScope.currentSubPage = "";
				}
			})
			.otherwise({
				redirectTo: '/'
			});
	}
]);