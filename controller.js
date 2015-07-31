(function() {
  'use strict';
  angular
    .module('bowieApp')
    .controller('SongController', function ($scope, SongService) {

          $scope.samplePlayer = function() {
            SongService.getSong().then(function(songObject) {
              console.log(songObject);
              $scope.lyric = songObject.lyric;
              console.log(songObject.lyric);
              songObject.song.play();
            })
          }
      });

}());
