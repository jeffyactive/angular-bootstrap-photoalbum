/**
 * Copyright 2017 Jeffrey Dungen
 * MIT License
 */

angular.module('photoalbum', [ 'ui.bootstrap' ])

  // Photo controller
  .controller('PhotoCtrl', function($scope) {
    prepareSlides(PHOTOS);

    function prepareSlides(photos) {
      var slides = [];
      for(index in photos) {
        var photo = photos[index];
        if(photo.hasOwnProperty('image')) {
          photo.index = parseInt(index);
          if(!photo.hasOwnProperty('fullsize')) {
            photo.fullsize = photo.image;
          }
          slides.push(photo);
        }
      }
      $scope.slides = slides;
    }

  });
