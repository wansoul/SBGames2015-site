'use strict';

angular.module('sbgamesApp')
	.service('UtilsService', function UtilsService(){

		this.resetScroll =  function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
		}
	});