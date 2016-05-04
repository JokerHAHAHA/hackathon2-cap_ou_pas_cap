// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// .controller('GeoCtrl', function($cordovaGeolocation) {


//   var posOptions = {timeout: 10000, enableHighAccuracy: false};
//   $cordovaGeolocation
//     .getCurrentPosition(posOptions)
//     .then(function (position) {
//       var lat  = position.coords.latitude
//       var long = position.coords.longitude
//       $scope.coordonates.lat = lat;
//       $scope.coordonates.long = long;
//       console.log($scope.coordonates);
//     }, function(err) {
//       // error
//     });


//   var watchOptions = {
//     timeout : 3000,
//     enableHighAccuracy: false // may cause errors if true
//   };

//   var watch = $cordovaGeolocation.watchPosition(watchOptions);
//   watch.then(
//     null,
//     function(err) {
//       // error
//     },
//     function(position) {
//       var lat  = position.coords.latitude
//       var long = position.coords.longitude
  
// });


//   watch.clearWatch();
//   // OR
//   $cordovaGeolocation.clearWatch(watch)
//     .then(function(result) {
//       // success
//       }, function (error) {
//       // error
//     });

// });