var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.users = [
        {name: "Iphone 14 promax", fullname: "$22.50"},
        {name: "Iphone 14 pro", fullname: "$15.00"},
        {name: "Iphone 14 ", fullname: "$123.82"}

    ];
    $scope.addUser = function () {
        $scope.users.push($scope.newUser);
        $scope.newUser = {};
        $scope.message = "New User Added successfully";

    };
   $scope.selectUser = function(user){
        console.log(user);
        $scope.clickedUser = user ;

    };
    $scope.editUser =function (){
        $scope.message=" Edited successfully";
};
    $scope.deleteUser =function (){
        $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
        $scope.message= " Deleted successfully";

    };
    $scope.clearMessage =function (){
        $scope.message="";
    };
});
