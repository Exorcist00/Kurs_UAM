angular.module('myapp', []).controller('TodoCtrl', function ($scope) {
<<<<<<< HEAD
	...
=======
	$scope.elements = [];
	$scope.inputValue = '';

	$scope.addNew = function () {
		if (!$scope.inputValue) {
			return;
		}
		$scope.elements.push({
			value: $scope.inputValue,
			status: true
		});
		$scope.inputValue = '';
	};
>>>>>>> upstream/master
});
