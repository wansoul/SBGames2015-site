'use strict';

angular.module('sbgamesApp')
	.service('ArtesEDesignResultadosService', function ArtesEDesignResultadosService($http, $q){
		'use strict';

		var resultados = {};
		var deferred = $q.defer();


/*
Link feed de resultados 

ARTES E DESIGN
Full Papers
https://spreadsheets.google.com/feeds/list/13-BPkWScB7gASBcx7UPQ1PRvrkfLhbkpZ8OGYAWl4Jk/od6/public/values?alt=json

Short Papers
https://spreadsheets.google.com/feeds/list/10wVE4EUM20eD6AM_a-MEFEgL1_hO2bC05stDaOMvZ6Q/od6/public/values?alt=json

*/

		//json de planilha do googleDrive - Full Papers
		$http.get('https://spreadsheets.google.com/feeds/list/13-BPkWScB7gASBcx7UPQ1PRvrkfLhbkpZ8OGYAWl4Jk/od6/public/values?alt=json')
		.success(function (data) {
			// console.log(data.feed.entry);
			resultados.fullpapers = translateJSON(data.feed.entry);
			// console.log("json depois da tradução: "+ jsonLimpo +", entry length: "+ data.feed.entry.length);
			deferred.resolve(resultados);
		});

		//json de planilha do googleDrive - Short Papers
		$http.get('https://spreadsheets.google.com/feeds/list/10wVE4EUM20eD6AM_a-MEFEgL1_hO2bC05stDaOMvZ6Q/od6/public/values?alt=json')
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

