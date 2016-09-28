(function(){
	'use strict';
	angular.module('app').factory('ajaxService', ajaxService);

	ajaxService.$inject = ['$http'];

	function ajaxService($http) {
		var api = '/';

		return {
			/*GET*/
			getCosts: getCosts,
		};

		function getCosts(){
			return $http.get(api.concat('getCosts.json')).catch(_logError);
		}

		function _logError(e){
			console.error('ajax error: ',e);
		}
	}
})();
