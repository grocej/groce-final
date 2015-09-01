(function() {
  'use strict';

  angular
    .module('bowieApp', [
      'ngRoute'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'SongController'
        })
        .when('/404', {
          template: '<h2>Bowie Is Not Pleased</h2>'
        })
        .otherwise({
          redirectTo: '/404'
        });
    })

}());
