'use strict';

angular.module('sbgamesApp')
	.service('IndustriaResultadosService', function IndustriaResultadosService($http, $q){
		'use strict';

		var resultados = {};
		var deferred = $q.defer();


/*
Link feed de resultados 

INDUSTRIA
https://spreadsheets.google.com/feeds/list/1_nwLrKixbM7WoapwdMq9glAX1_tzjb1UnchLPeah0uY/od6/public/values?alt=json

*/

		//json de planilha do googleDrive - Full Papers
		$http.get('https://spreadsheets.google.com/feeds/list/1jFLD-CLqt7qjVH2qjtukEKt0tgyDK75qE5thc0UfD6A/od6/public/values?alt=json')
		.success(function (data) {
			// console.log(data.feed.entry);
			resultados.fullpapers = translateJSON(data.feed.entry);
			// console.log("json depois da tradução: "+ jsonLimpo +", entry length: "+ data.feed.entry.length);
			deferred.resolve(resultados);
		});

		//json de planilha do googleDrive - Short Papers
		$http.get('https://spreadsheets.google.com/feeds/list/1_ONaOQoG0evl3AoD4bMBLy2Aalt2HAguaNxwYaPMcEI/od6/public/values?alt=json')
		.success(function (data) {
			// console.log(data.feed.entry);
			resultados.shortpapers = translateJSON(data.feed.entry);
			// console.log("json depois da tradução: "+ jsonLimpo +", entry length: "+ data.feed.entry.length);
			deferred.resolve(resultados);
		});
		

		this.getResultados = function(){
			return deferred.promise;
		}

		// De/para a partir de dados gerados na exportação do gDrive
		var translateJSON = function(data){
			var jsonLimpo = [];
			var temp = {};
			for (var i = 0; i < data.length; i++) {
				temp.seq = data[i].gsx$seq.$t;
				temp.paper = data[i].gsx$paper.$t;
				temp.title = data[i].gsx$title.$t;
				temp.authors = data[i].gsx$authors.$t;

				jsonLimpo.push(temp);
				temp = {};
			};
			return jsonLimpo;
		}

	});

