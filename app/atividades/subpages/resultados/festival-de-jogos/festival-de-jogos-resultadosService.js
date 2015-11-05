'use strict';

angular.module('sbgamesApp')
	.service('FestivalDeJogosResultadosService', function FestivalDeJogosResultadosService($http, $q){
		'use strict';

		var resultados = {};
		var deferred = $q.defer();


/*
Link feed de RESULTADOS 

FESTIVAL DE JOGOS
https://spreadsheets.google.com/feeds/list/1VywTqFAm-PnIX8nCvofFkwY99NWjDzdzxoI9PMaA3Go/od6/public/values?alt=json

FINALISTAS
https://spreadsheets.google.com/feeds/list/1EDTYIBNGef2MjlBnuMe6AARjSXSUDXlFmv0j0ZizeGQ/od6/public/values?alt=json

*/

		//json de planilha do googleDrive - Full Papers
		$http.get('https://spreadsheets.google.com/feeds/list/1VywTqFAm-PnIX8nCvofFkwY99NWjDzdzxoI9PMaA3Go/od6/public/values?alt=json')
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
				temp.titulo = data[i].gsx$titulo.$t;
				temp.categoria = data[i].gsx$categoria.$t;
				temp.empresa = data[i].gsx$empresa.$t;
				temp.estado = data[i].gsx$estado.$t;
				temp.siteEmpresa = data[i].gsx$siteempresa.$t;
				temp.linkLoja = data[i].gsx$linkloja.$t;

				jsonLimpo.push(temp);
				temp = {};
			};
			return jsonLimpo;
		}

	});

