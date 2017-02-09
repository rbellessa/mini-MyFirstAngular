angular.module('friendsList').controller('mainCtrl', function($scope){

  $scope.friends = [
    "Taylor",
    "Chris",
    "Ben",
    "Hanna",
    "Arron",
    "Kerry",
    "Chad"
  ];

    $scope.addFriendName = '';  //not "needed"

    $scope.addFriend = function(){
    $scope.friends.push($scope.addFriendName);
    $scope.addFriendName = '';
  };
});

//declaration
