(function(){
	'use strict';
	angular.module('app').factory('calculatorService', calculatorService);

	calculatorService.$inject = [];

	function calculatorService() {

		return {
      pickPackage: pickPackage,
			validatePackage: validatePackage,
			pickIdealResults: pickIdealResults
		};

		function pickPackage(costs, inputs){
			var costsLength = costs.length;
			var result = {};
			for(var i=0; i<costsLength; i++){
				if(validatePackage(costs[i].dimensions, inputs)){
					result = costs[i];
					break;
				}
			}
			return result;
		}

		function pickIdealResults(costs, inputs){
			var regularOutcome = pickPackage(costs, inputs);
			var inputValues = [inputs.length, inputs.breadth, inputs.height].sort();
			var orderedInputs = {
				length: inputValues[1],
				breadth: inputValues[2],
				height: inputValues[0]
			};
			var result = pickPackage(costs, orderedInputs);
			var valid = regularOutcome.id > result.id;
			return {orderedInputs: orderedInputs, result: result, valid: valid};
		}

		function validatePackage(dimensions, inputs){
			var length = dimensions.length >= inputs.length && inputs.length;
			var breadth = dimensions.breadth >= inputs.breadth && inputs.breadth;
			var height = dimensions.height >= inputs.height && inputs.height;
			return (length && breadth && height);
		}


	}
})();
