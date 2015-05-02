'use strict';

angular.module('sbgamesApp')
	.service('UtilsService', function UtilsService(){

		this.resetScroll =  function(){
			if ( $('body').scrollTop()) {
				$("html, body").animate({ scrollTop: 0 }, 500);
			};
		}

		/*this.setLinks = function(page, subpage, $rootScope){
			'use strict';
			$rootScope.currentPage = page; 
			$rootScope.currentSubPage = subpage;
			this.resetScroll(); 
			console.log('setLinks -> '+ page +' - '+subpage);
		};*/

	});