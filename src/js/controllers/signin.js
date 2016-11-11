'use strict';

/* Controllers */
  // signin controller
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;

    $scope.login = function() {
        //alert(1)
      $scope.authError = null;
      // Try to login
      $http.post('http://192.168.31.188:9999/Lepv_system/api/login',
          {languageColumn:'name_eu',
              'Content-Type':'application/x-www-form-urlencoded',
              email : $scope.user.email,password : $scope.user.password
          })
      .then(function(response) {
          console.log(response)
        if ( !response.data.data.success) {
          $scope.authError = 'Email or Password not right';
        }else{
          $state.go('app.dashboard-v1');
        }
      }, function(x) {
        $scope.authError = 'Server Error';
      });
    };
  }])
;
/*
// 模拟自动登录
app.controller('SigninFormController', ['$scope', '$http', '$state', function($scope, $http, $state) {
    $scope.user = {};
    $scope.authError = null;

        //alert(1)
        $scope.authError = null;
        $http.post('api/login', {email: '123@qq.com', password: 1234})
            .then(function(response) {
                console.log(response)
                if ( !response.data.data.success) {
                    $scope.authError = 'Email or Password not right';
                }else{
                    $state.go('app.dashboard-v1');
                }
            }, function(x) {
                $scope.authError = 'Server Error';
            });

}])
;*/
