/*
 Handling the icon-event mapping page
*/

var mappings = angular.module('mappings', ['dbService', 'iconService', 'msgService']);

mappings.config(function ($stateProvider) {
  $stateProvider
  .state('mappings', {
    url: "/mappings",
    templateUrl: "app/mappings/mappings.html",
    controller: "mappingsController",
    resolve: {}
  })
});

mappings.controller('mappingsController', function ($scope, $http, $stateParams, dbService, iconService, $ionicModal, msgService, $rootScope, $state, $interval, $ionicPopup, $timeout) {

  //show all current mappings
  //add a new mapping
  //remove a mapping
  //edit a mapping

  $scope.icons = [];

  msgService.showBackdropLoading();

  iconService.getAllIcons()
  .then(function success(data) {
      $scope.icons = data;
      msgService.hide();
    },
    function error(err) {
      msgService.hide();
      msgService.showErrorMsg('Unable to load icons. Please refresh.');
    });

  var compose = function (text, icon) {
    var mapping = {name: text, icon: icon};
    return mapping;
  };

  var composeAddTemplate = function(icon){
    var template = '<ion-modal-view>' +
      '<ion-header-bar> ' +
      '<h1 class="title">Add Mapping</h1> ' +
      '</ion-header-bar> ' +
      '<ion-content> <img src="'+ icon.src +'" height="20%" width="20%" align="middle"> </ion-content>' +
      '</ion-modal-view>';

    return template;
  };

  $scope.add = function (icon, $event) {

    console.log('==> add');
    console.log(icon);

    var template = composeAddTemplate(icon);

    $scope.modal = $ionicModal.fromTemplate(template, {
      scope: $scope
    });
    $scope.modal.show();
  };

  $scope.delete = function () {

  };

  $scope.edit = function () {

  };

  $scope.show = function () {

    //from db get all the current mappings
    //set them to the scope object

  };

});
