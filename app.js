(function() {
  'use strict';

  angular
    .module('bowieApp', [
      'ngRoute',
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'main.html',
          controller: 'songTextController'
        })
        .when('/add', {
          templateUrl: 'add.html',
          controller: 'addController'
        })
        .when('/404', {
          template: '<h2>Bowie Is Not Pleased</h2>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    }

}());
