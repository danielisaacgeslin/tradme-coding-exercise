(function(){
	'use strict';
	angular.module('app').directive('costsTable', costsTableDirective);

  costsTableDirective.$inject = [];

	function costsTableDirective() {
    return {
      restrict: 'E',
      templateUrl: 'costs-table.directive.html',
      link: link,
      scope: {
          costs: '=',
					selectedId: '=',
					selectedValidity: '='
      }
    };

    function link($scope){
      /*private functions*/

      /*end private functions*/

      /*public functions*/
      /*end public functions*/
    }
	}
})();
