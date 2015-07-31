(function() {
  'use strict';
  angular
    .module('bowieApp')
    .controller('SongController', function ($scope, SongService) {

          $scope.samplePlayer = function() {
            SongService.getSong()
            
          }
      });

}());
