var app = angular.module('mapnote', ['google-maps']);

app.controller('MapNoteController', function($scope){

  var i = 0;
  var createMarker = function(){
    return {
      id: i,
      options: {
        draggable: false,
        latitude: $scope.marker.coords.latitude,
        longitude: $scope.marker.coords.longitude,
        title: 'm' + i
      }
    }
  };

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
          };
        });
      }
    }
  };

  $scope.marker = {
    id: i,
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

  $scope.inputMarkers = [{
    id: 11,
    options: {
      draggable: false,
      latitude: 49.1,
      longitude: -72,
      title: 'm1'
    }
  }];

  $scope.list = [];

  $scope.addToList = function(){
      i++;
      $scope.marker.options.visible = false;
      $scope.inputMarkers.push(createMarker());
      $scope.list.push({content: $scope.listInput});
      $scope.listInput = '';
      console.log('$scope.inputMarkers', $scope.inputMarkers);
  };

  $scope.removeFromList = function(){
    $scope.list.splice(this.$index, 1);
  };

});
