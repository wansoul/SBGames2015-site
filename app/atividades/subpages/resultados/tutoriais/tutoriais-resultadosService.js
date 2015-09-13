'use strict';

angular.module('sbgamesApp')
	.service('TutoriaisResultadosService', function TutoriaisResultadosService($http, $q){
		'use strict';

		var resultados = {};
		var deferred = $q.defer();


/*
Link feed de resultados 

ARTES E DESIGN
Full Papers
https://spreadsheets.google.com/feeds/list/1jFLD-CLqt7qjVH2qjtukEKt0tgyDK75qE5thc0UfD6A/od6/public/values?alt=json
Short Papers
https://spreadsheets.google.com/feeds/list/1_ONaOQoG0evl3AoD4bMBLy2Aalt2HAguaNxwYaPMcEI/od6/public/values?alt=json

CULTURA
Full Papers
https://spreadsheets.google.com/feeds/list/1mqQXuRlN2rroUe_p7TvGUTcP6CnKrupKpr4rEDZQpuw/od6/public/values?alt=json
Short Papers
https://spreadsheets.google.com/feeds/list/1YRYjuql64qOxivEDX3Qh9s2zZ8-zfjiq2mbts0M_ht8/od6/public/values?alt=json

COMPUTACAO
Full Papers
https://spreadsheets.google.com/feeds/list/1pBjeAXtycmxq3VGontuu_f1rXYCrdRBNFGACvWh95Do/od6/public/values?alt=json
Short Papers
https://spreadsheets.google.com/feeds/list/1W4fuZxUsW6EGzu-FmJzqKaILeLoYQqz_NrBwoCGcwuQ/od6/public/values?alt=json

TUTORIAIS
https://spreadsheets.google.com/feeds/list/1_nwLrKixbM7WoapwdMq9glAX1_tzjb1UnchLPeah0uY/od6/public/values?alt=json

*/

		//json de planilha do googleDrive - Full Papers
		$http.get('https://spreadsheets.google.com/feeds/list/1_nwLrKixbM7WoapwdMq9glAX1_tzjb1UnchLPeah0uY/od6/public/values?alt=json')
		.success(function (data) {
			// console.log(data.feed.entry);
			resultados = translateJSON(data.feed.entry);
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
				temp.title = data[i].gsx$title.$t;
				temp.topics = data[i].gsx$topics.$t;
				temp.authors = data[i].gsx$authors.$t;

				jsonLimpo.push(temp);
				temp = {};
			};
			return jsonLimpo;
		}

	});

