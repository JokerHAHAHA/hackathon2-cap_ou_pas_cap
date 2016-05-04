function homeCtrl($scope, homeService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function () {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
            $state.go('state.homeGame');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
}