var app = angular.module('mapnote', ['google-maps']);

app.controller('MapController', function($scope, $log){
  $scope.map = {
    center: {
      latitude: 49,
      longitude: -73
    },
    zoom: 8,
    events: {
      click: function(maps, eventName, args){                                                                                                              
        // $log.log(eventName);
        // $log.log('args', args);
        // $log.log(args[0].latLng);
        // $log.log('lat', args[0].latLng.lat());
        // $log.log('lng', args[0].latLng.lng());
        $scope.marker.coords = {
          latitude: args[0].latLng.lat(),
          longitude: args[0].latLng.lng()
        }
        $scope.$apply();
        // console.log('$scope.marker.coords', $scope.marker.coords);
      }
    }
  };
  $scope.marker = {
    id: 0,
    coords: {
      latitude: 49,
      longitude: -73
    },
    options: {draggable: true},
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
