function homeGameCtrl($scope, $http) {
	$scope.step = 1;
	$scope.career = {};
	$scope.answer = ["","","","","","",""];

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
	$scope.checkRep = function (choice, indexQ) {
		console.log(choice);
		console.log(indexQ);
		 if (choice.toString() != $scope.quiz.ruby[indexQ].answer.toString()) {
		 	$scope.answer.splice(indexQ, 1, $scope.quiz.ruby[indexQ].answer);
		 console.log($scope.answer);
		}
		 else {
		 	$scope.answer.splice(indexQ, 1, "good");
		 console.log($scope.answer);
		}
	}


	load();
}