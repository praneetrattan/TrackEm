/*
 Central service for interactions with PouchDB
 */

var dbService = angular.module('dbService', []);

dbService.service('dbService', function () {

  var service = {

    events: 'events',
    settings: 'settings',
    mappings: 'mappings',

    initialSetup: function () {
      var events = new PouchDB(this.events);
      var settings = new PouchDB(this.settings);
      var mappings = new PouchDB(this.mappings);
    },

    getEvents: function () {
      var events = new PouchDB(this.events);
    },

    addEvent: function (date, event, iconUrl) {

      var events = new PouchDB(this.events);
      console.log(date);

      events.get(date.toString())
      .then(function (doc) {
        console.log(doc);
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  };

  return service;
  
});
