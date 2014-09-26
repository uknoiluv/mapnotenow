var app = angular.module('mapnote', ['google-maps']);

app.controller('MapNoteController', function($scope){

  var i = 0;
  var createMarker = function(){
    return {
      id: i,
      options: {
        draggable: false,
        // latitude: $scope.marker.coords.latitude,
        // longitude: $scope.marker.coords.longitude,
      },
      title: $scope.listInput,
      show: true,
      coords:{
        latitude: $scope.marker.coords.latitude,
        longitude: $scope.marker.coords.longitude
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
          console.log('hit');
          $scope.marker.options.visible = true;
          $scope.marker.show = true;
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
      // visible: true
    },
    events: {
      dragend: function(marker, eventName, args) {
        $scope.$apply(function(){
          console.log('marker dragend');
          console.log(marker.getPosition().lat());
          console.log(marker.getPosition().lng());
        });
      }
      // click: function(marker, eventName, args){
      //   console.log('x');
      //   console.log('marker', marker);
      //   console.log('eventName', eventName);
      //   console.log('args', args);
      // }
    },
    show: false
  };

  // $scope.inputMarkers = [{
  //     id: 20,
  //     options: {
  //       draggable: false,
  //       // latitude: $scope.marker.coords.latitude,
  //       // longitude: $scope.marker.coords.longitude,
  //     },
  //     title: 'hahahahahahha',
  //     show: true,
  //     coords: {
  //       latitude: 49,
  //       longitude: -73
  //     }
  //   },
  //   {
  //     id: 21,
  //     options: {
  //       draggable: false,
  //       // latitude: $scope.marker.coords.latitude,
  //       // longitude: $scope.marker.coords.longitude,
  //     },
  //     title: 'skldfjklsdjflksa',
  //     show: true,
  //     coords: {
  //       latitude: 49.2,
  //       longitude: -73.1
  //     }
  //   }];
  $scope.inputMarkers = [];

  $scope.list = [];

  $scope.listInput = '';

  $scope.message = '';

  $scope.addToList = function(){
    if($scope.marker.show){
      $scope.message = '';
      i++;
      $scope.marker.show = false;
      $scope.marker.options.visible = false;
      $scope.inputMarkers.push(createMarker());
      // $scope.list.push({content: $scope.listInput});
      console.log('$scope.list', $scope.list);
      $scope.listInput = '';
      console.log('$scope.inputMarkers', $scope.inputMarkers);
    }else{
      $scope.message = 'click on the map first';
    }
  };

  $scope.removeFromList = function(){
    $scope.inputMarkers.splice(this.$index, 1);
  };

});
