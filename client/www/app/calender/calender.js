/*
 Interactions with the main calendar page
 */

var calender = angular.module('calender', ['ui.calendar', 'dbService', 'iconer']);

calender.config(function ($stateProvider) {
  $stateProvider
  .state('calender', {
    url: "/calender",
    templateUrl: "app/calender/calender.html",
    controller: "calenderController"
  })
});

calender.controller('calenderController', function ($scope, uiCalendarConfig, dbService, $rootScope, $state, $interval, $ionicPopup, $timeout) {

  ionic.Platform.ready(function () {
    window.StatusBar && StatusBar.styleDefault();
  });


  $scope.dateClick = function (momentDate, jsEvent, view) {
    var date = momentDate.format('MM-DD-YYYY');
    $state.go('iconer/:date', {date: date});
  };

  $scope.render = function (event, element, view) {

    if (event.imageurl) {
      element.find("div.fc-content")
      .prepend("<div>" +
        "<img src='" + 'img/ionic.png' + "' width='12' height='12' />" + "&nbsp;" +
        "<img src='" + 'img/gift.png' + "' width='12' height='12' />" + "&nbsp;" +
        "<img src='" + 'img/gift.png' + "' width='12' height='12' />" + "&nbsp;" +
        "<img src='" + 'img/gift.png' + "' width='12' height='12' />" + "&nbsp;" +
        "<img src='" + 'img/gift.png' + "' width='12' height='12' />" + "&nbsp;" +
        "</div><div>" +
        "<img src='" + 'img/gift.png' + "' width='12' height='12' />" + "&nbsp;" +
        "<img src='" + 'img/gift.png' + "' width='12' height='12' />" + "&nbsp;" +
        "<img src='" + 'img/gift.png' + "' width='12' height='12' />" +
        "</div>");

    }
  };

  $scope.calendarData = [
    {
      events: [
        {
          title: 'From1',
          start: '2016-06-11',
          imageurl: 'img/ionic.png',
          backgroundColor: '#ffffff',
          borderColor: '#ffffff'
        }
      ]
    }
  ];

  $scope.uiConfig = {
    calendar: {
      editable: true,
      fixedWeekCount: false,
      header: {
        left: 'title',
        center: '',
        right: 'today prev,next'
      },
      dayClick: $scope.dateClick,
      eventRender: $scope.render,
      background: '#f26522'
    }
  };


});

