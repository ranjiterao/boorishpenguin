angular.module('main.controller', [])
  .controller('MainController', function ($scope, $state, $rootScope, $location) {
    $scope.logout = function() {
      $rootScope.user = undefined;
      $location.path('/');
    };

    $scope.goToProfile =function(){
      if ($rootScope.user){
        $state.go('user', { id: $rootScope.user.id });
      }
    };
  });