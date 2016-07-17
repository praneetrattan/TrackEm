/*
 Interactions with the main iconer page
 */

var iconer = angular.module('iconer', ['dbService', 'mappings']);

iconer.config(function ($stateProvider) {
  $stateProvider
  .state('iconer/:date', {
    url: "/iconer/:date",
    templateUrl: "app/iconer/iconer.html",
    controller: "iconerController",
    resolve: {}
  })
});

iconer.controller('iconerController', function ($scope, $stateParams, dbService, $rootScope, $state, $interval, $ionicPopup, $timeout) {

  $scope.icons = ['Happy', 'Sad', 'Smile', 'Kiss'];

  $scope.addNewMapping = function () {
    $state.go('mappings');

  };

  $scope.currentDate = $stateParams.date;

  $scope.events = dbService.getEvents();


  //triggered when the user clicks on an icon from the list
  $scope.addEvent = function (event) {
    dbService.addEvent($stateParams.date, event);
  };

  $scope.setEvents = function (date) {

  };

  //get events from db
  //save events to db
  //get list of all events
  //get icons for all listed events


});
