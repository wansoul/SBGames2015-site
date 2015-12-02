'use strict';

angular.module('sbgamesApp')
	.service('AnaisService', function AnaisService($http, $q){
		'use strict';

		var lista = {};
		var deferred = $q.defer();

/*
Anais: Papers-list ID
id = 1BsITn6mVEUzfxxQY55_iA6CeThJr3D6-N8UkLtTWYUM
*/
		var urlId = "1BsITn6mVEUzfxxQY55_iA6CeThJr3D6-N8UkLtTWYUM";

		//json de planilha do googleDrive - Full Papers
		$http.get('https://spreadsheets.google.com/feeds/list/1BsITn6mVEUzfxxQY55_iA6CeThJr3D6-N8UkLtTWYUM/od6/public/values?alt=json')
		.success(function (data) {
			// console.log(data.feed.entry);
			lista = translateJSON(data.feed.entry);
			// console.log("json depois da tradução: "+ jsonLimpo +", entry length: "+ data.feed.entry.length);
			deferred.resolve(lista);
		});


		this.getLista = function(){
			return deferred.promise;
		}

		// De/para a partir de dados gerados na exportação do gDrive
		var translateJSON = function(data){
			var jsonLimpo = [];
			var temp = {};
			for (var i = 0; i < data.length; i++) {
				temp.id = data[i].gsx$id.$t;
				temp.titulo = data[i].gsx$titulo.$t;
				temp.categoria = data[i].gsx$categoria.$t;

				jsonLimpo.push(temp);
				temp = {};
			};
			return jsonLimpo;
		}

	});

