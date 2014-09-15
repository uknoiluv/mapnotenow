var app = angular.module('mapnote', []);

app.controller('MapController', function($scope){
  
})

app.controller('NoteController', function($scope){
  $scope.list = [];

  $scope.addToList = function(){
    $scope.list.push({content: $scope.listInput});
    $scope.listInput = '';
  };

  $scope.removeFromList = function(){

  };


});
