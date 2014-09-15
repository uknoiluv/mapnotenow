var app = angular.module('mapnote', ['google-maps']);

app.controller('MapController', function($scope){
  $scope.map = {
    center: {
      latitude: 49,
      longitude: -73
    },
    zoom: 8
  }
});

app.controller('NoteController', function($scope){
  $scope.list = [];

  $scope.addToList = function(){
    $scope.list.push({content: $scope.listInput});
    $scope.listInput = '';
  };

  $scope.removeFromList = function(){
    $scope.list.splice(this.$index, 1);
  };


});
