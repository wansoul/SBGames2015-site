'use strict';

angular.module('sbgamesApp')
	.service('NoticiasService', function NoticiasService($http, $q){
		'use strict';

		var noticias = [];

		var deferred = $q.defer();

		//json de arquivo no próprio servidor
		/*$http.get('app/noticias/noticias.json')
		.success(function (data) {
			deferred.resolve(data.reverse());
		});*/

		//json de planilha do googleDrive 
		$http.get('https://spreadsheets.google.com/feeds/list/1twf3evogV6eDk9tz4i6up_4VHt9RAuUbBOdZNRvRS5Y/od6/public/values?alt=json')
		.success(function (data) {
			// console.log(data.feed.entry);
			var jsonLimpo = translateJSON(data.feed.entry);
			// console.log("json depois da tradução: "+ jsonLimpo +", entry length: "+ data.feed.entry.length);
			deferred.resolve(jsonLimpo.reverse());
		});
		

		this.getNoticias = function(){
			return deferred.promise;
		}

		// De/para a partir de dados gerados na exportação do gDrive
		var translateJSON = function(data){
			var jsonLimpo = [];
			var temp = {};
			for (var i = 0; i < data.length; i++) {
				temp.id = data[i].gsx$id.$t;
				temp.titulo = data[i].gsx$titulo.$t;
				temp.chamada = data[i].gsx$chamada.$t;
				temp.data = data[i].gsx$data.$t;
				temp.imgUrl = data[i].gsx$imgurl.$t;
				temp.texto = data[i].gsx$texto.$t;

				jsonLimpo.push(temp);
				temp = {};
				//console.log("for loop "+i+": "+jsonLimpo);
			};
			return jsonLimpo;
		}

	});

