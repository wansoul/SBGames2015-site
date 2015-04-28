'use strict';

angular.module('sbgamesApp')
	.service('UtilsService', function UtilsService(){

		this.resetScroll =  function(){
			if ( $('body').scrollTop()) {
				$("html, body").animate({ scrollTop: 0 }, 500);
			};
		}

	});