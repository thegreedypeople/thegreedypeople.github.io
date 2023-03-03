  // app1 scope controllers
  angular.module('app1', []).controller('navCtrl', function($scope) {
    $scope.navs = [
      {nav:"Home",link:"/"},
      {nav:"Blog",link:"/blog"}
      ];
  });
