app.controller('sationCtrl', ['$scope', '$http', function($scope, $http) {
       $http.post('api/stationlist', {email: '222@qq.com', password: 123})
           .then(function(response) {
               console.log(response);
           }, function(x) {
               console.log('error')
           });


}]);
