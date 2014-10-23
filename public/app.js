var app = angular.module('mapnote', ['google-maps', 'ui.router']);

app.controller('MapNoteController', function($scope){

  var i = 0;
  var createMarker = function(){
    var lat = $scope.marker.coords.latitude;
    var lng = $scope.marker.coords.longitude;
    $scope.polyline.path.push({latitude: lat, longitude: lng});
    return {
      id: i,
      options: {
        draggable: false,
      },
      title: $scope.listInput,
      show: true,
      coords:{
        latitude: lat,
        longitude: lng
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

  $scope.polyline = {
    path: [],
    stroke: {
      color: '#6060FB',
      weight: 3
    },
    editable: false,
    geodesic: false,
    draggable: false,
    visible: true,
    icons: [{
      icon: {
          path: google.maps.SymbolPath.FORWARD_OPEN_ARROW
      },
      offset: '25px',
      repeat: '50px'
    }]
  };

  $scope.addToList = function(){
    if($scope.marker.show){
      $scope.message = '';
      i++;
      $scope.marker.show = false;
      $scope.marker.options.visible = false;
      $scope.inputMarkers.push(createMarker());
      console.log('$scope.polyline.path', $scope.polyline.path);
      // $scope.list.push({content: $scope.listInput});
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

app.controller('SignupController', function($scope, $http){
  $scope.signup = function(username, password){
    var userData = {username: username, password: password};
    $http({method: 'POST', url: './signup', data: userData}).success(function(data, status){
      console.log('data', data, 'status', status);
    }).error(function(data, status){
      console.log('data', data, 'status', status);
    });
  }
})

app.controller('LoginController', function($scope, $http){
  $scope.login = function(username, password){
    var userData = {username: username, password: password};
    console.log('userData', userData);
    $http({method: 'POST', url: './login', data: userData}).success(function(data, status){
      console.log('data', data, 'status', status);
    }).error(function(data, status){
      console.log('data', data, 'status', status);
    });
  }
})

// app.directive('myTest', function(){
//   return {
//     link: function(scope, element, attr){
//       element.css('background-color', 'yellow');
//       element.on('click', function(){
//         element.css('background-color', 'transparent')
//       });
//     }
//   }
// })
