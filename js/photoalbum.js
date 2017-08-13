/**
 * Copyright 2017 Jeffrey Dungen
 * MIT License
 */

angular.module('photoalbum', [ 'ui.bootstrap' ])

  // Config to facilitate photo index search in the URL
  .config(function($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  })

  // Photo controller
  .controller('PhotoCtrl', function($scope, $location) {
    prepareSlides(PHOTOS);
    jumpToSlide();

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

    function jumpToSlide() {
      if($location.search().hasOwnProperty('index')) {
        var index = parseInt($location.search().index);
        if((isNaN(index)) || (index < 0) || (index > $scope.slides.length)) {
          index = 0;
        }
        $scope.active = index;
      }
    }

    // Update the search in the URL with the active slide's index
    $scope.$watch('active', function(active) {
      $location.search( { index: active } );
    });

  });
