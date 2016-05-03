function homeGameCtrl($scope, $http) {
	$scope.step = 1;
	$scope.career = {};

	function load () {
		 $http.get('http://localhost:8000/careers').then(function (res) {
		 	$scope.careers = res.data; 
		 });
		 $http.get('./datas/data.json').success(function (data) {
		 	$scope.quiz = data; 
		 });
	}

	$scope.add = function () {
		 var data = $scope.career;
		 $http.post('http://localhost:8000/careers', data);
		 $scope.career = {};
	}
	load();
}