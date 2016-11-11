app.controller('sationCtrl',['$scope','$http',function ($scope ,$http) {
    $scope.dataup = function() {
        alert(2);
       /* $http({
            url:'http://localhost:63342/lepv/src/api/station-list.json',
            method: 'get'
            /!* data: {email:'123456@qq.com'}*!/
        }).success(function(res){
            $scope.names= res.states;
        }).error(function(){
            console.log("error");
        })*/
    }
}]);
