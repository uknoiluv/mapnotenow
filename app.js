var app = angular.module('mapnote', ['google-maps']);

app.controller('MapController', function($scope){
  $scope.map = {
    center: {
      latitude: 49,
      longitude: -73
    },
    zoom: 8,
    events: {
      click: function(maps, eventName, args){                                                                                                              
        $scope.$apply(function(){
          $scope.marker.visible = true;
          $scope.marker.coords = {
            latitude: args[0].latLng.lat(),
            longitude: args[0].latLng.lng()
          }
        });
      }
    }
  };
  $scope.marker = {
    id: 0,
    coords: {
      latitude: 49,
      longitude: -73
    },
    options: {
      draggable: true,
      visible: false
    },
    events: {
      dragend: function(marker, eventName, args) {
        console.log('marker dragend');
        console.log(marker.getPosition().lat());
        console.log(marker.getPosition().lng());
      }
    }
  };  
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
