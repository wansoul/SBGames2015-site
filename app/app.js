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
				controller: 'IndexController'
			})
			.when('/trilhas', {
				redirectTo: '/trilhas/artes-e-design'
			})
			.when('/trilhas/:id', {
				templateUrl: 'app/trilhas/trilhasTemplate.html',
				controller: 'TrilhasController'
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


//Configurando Spinner
// app.config(function ($httpProvider) {
//   $httpProvider.responseInterceptors.push('myHttpInterceptor');

//   var spinnerFunction = function spinnerFunction(data, headersGetter) {
//     $("#spinner").addClass("ng-show");
//     return data;
//   };

//   $httpProvider.defaults.transformRequest.push(spinnerFunction);
// });


// app.factory('myHttpInterceptor', function ($q, $window) {
//   return function (promise) {
//     return promise.then(function (response) {
//       $("#spinner").addClass("ng-hide");
//       return response;
//     }, function (response) {
//       $("#spinner").addClass("ng-show");
//       return $q.reject(response);
//     });
//   };
// });


