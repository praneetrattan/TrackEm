/* 
 Central service for handling user notifications and errors 
*/

var msgService = angular.module('msgService', []);

msgService.factory("msgService", function ($ionicLoading, $timeout, $ionicBackdrop) {

  return {

    showErrorMsg: function (msg) {
      var alertPopup = $ionicPopup.alert({
        title: 'Error',
        template: msg
      });

      alertPopup.then(function (res) {
        console.log('OKed error');
      });
    },

    showBackdropLoading: function () {
      $ionicLoading.show({
        template: '<p><ion-spinner icon="ios"></ion-spinner></p>Loading...',
        animation: 'fade-in',
        showBackdrop: true,
        noBackdrop: false,
        maxWidth: 200
      });

      $timeout(function () {
        $ionicLoading.hide();
      }, 30000);
    },

    showLoading: function () {
      $ionicLoading.show({
        template: '<p><ion-spinner icon="ios"></ion-spinner></p>Loading...',
        animation: 'fade-in',
        showBackdrop: false,
        maxWidth: 200
      });

      $timeout(function () {
        $ionicLoading.hide();
      }, 30000);
    },

    hide: function () {
      $ionicLoading.hide();
    }

  };
});
