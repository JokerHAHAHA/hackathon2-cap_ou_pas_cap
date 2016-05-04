function homeGameCtrl($scope, $http) {
	$scope.step = 1;
	$scope.career = {};
	$scope.answer = [];

	function load () {
		 $http.get('http://localhost:8000/careers').then(function (res) {
		 	$scope.careers = res.data; 
		 });
		 $http.get('./datas/data.json').success(function (data) {
		 	$scope.quiz = data;
		 });
		 $http.get('./datas/users.json').success(function (data) {
		 	$scope.users = data;
		 	console.log($scope.users);
		 });
	}

	$scope.add = function () {
		 var data = $scope.career;
		 $http.post('http://localhost:8000/careers', data);
		 $scope.career = {};
	}
	$scope.checkRep = function (choice, indexQ) {
		console.log(typeof choice);
		console.log($scope.quiz.ruby[indexQ-1].answer);
		 if (choice != $scope.quiz.ruby[indexQ-1].answer) {
		 	$scope.answer.push($scope.quiz.ruby[indexQ-1].answer);
		 console.log($scope.answer);
		}
		 else {
		 	$scope.answer.push("good");
		 console.log($scope.answer);
		}
	}


	load();
}