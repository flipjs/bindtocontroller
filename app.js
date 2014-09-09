/*=================================================
=            Angular: bindToController            =
=================================================*/


void (function(app) {

  'use strict';

  app.controller('ParentController', ParentCtrl)
  app.controller('ChildController', ChildCtrl)
  app.directive('musicPlayer', musicPlayer)

  function ParentCtrl() {
    this.artist = 'The Beatles'
    this.song = 'I Am The Walrus'
    this.fizzbuzz = 'fizz'
  }

  function ChildCtrl() {
    this.artist = 'The Stone Roses'
    this.song = 'I Am The Resurrection'
    this.fizzbuzz = 'buzz'
  }

  function musicPlayer() {
    return {
      restrict: 'E',
      scope: {
        artist: '@',
        song: '=track'
      },
      controller: MusicPlayerCtrl,
      controllerAs: 'MusicPlayerCtrl',
      bindToController: true,
      template: [
          '<div class="text-center"><button class="btn btn-xlarge btn-primary">'
        , '<i class="fa fa-music black"></i> {{ MusicPlayerCtrl.song }}&nbsp; '
        , '<i class="fa fa-play black"></i> {{ MusicPlayerCtrl.artist }} '
        , '<i class="fa fa-group black"></i></button></div>'
      ].join(''),
      link: function(scope, element, attrs, ctrl) {
        element.bind('click', function() {
          console.log(ctrl.playTrack(), '\n')
        })
      }
    }
  }

  function MusicPlayerCtrl() {
  }

  MusicPlayerCtrl.prototype.playTrack = function() {
    return 'Now playing "' + this.song + ' by ' + this.artist + '"...'
  }

})(angular.module('app', []))
