/*
 Service for handling icon mapping
*/

var iconService = angular.module('iconService', []);

iconService.service('iconService', function ($http, $q) {

  var service = {

    getAllIcons: function () {

      var deferred = $q.defer();

      $http.get('app/icon.json')
      .then(function success(results) {
          deferred.resolve(results.data);
        },
        function error(err) {
          deferred.reject(err);
        });

      return deferred.promise;
    }
  };

  return service;

});
