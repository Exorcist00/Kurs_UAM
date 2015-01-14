angular.module('myapp', []).directive('uamSearchField', function () {
	return{
		restrict: 'E',
		scope:{
			value: '=',
			showClear: '@'
		},
		templateUrl:'templates/search_field.html'
	};
});

angular.???
