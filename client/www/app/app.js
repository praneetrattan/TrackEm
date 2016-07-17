/*
 TrackEm main file
*/

angular.module('app', ['ionic', 'calender', 'dbService'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {

  });
})

.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

})

.controller('appController', function ($scope, $state, dbService) {
  dbService.initialSetup();
  $state.go('calender');

});


/*
 Color Theme:
 bar-royal
 bar-balanced
 bar-energized
 bar-assertive
 */
