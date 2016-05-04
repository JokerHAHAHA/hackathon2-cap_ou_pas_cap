function compteCtrl($scope, $http) {
    $scope.user = {};
    $scope.add = function () {
        var data = $scope.user;
        $http.post('192.168.3.20:8000/users', data);
        $scope.user = {};
    }

}