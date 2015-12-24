(function () {
  'use strict';

  angular.module('petdom.landing-page')
    .controller('LandingPageController', LandingPageController);

  /**
   * @ngdoc controller
   * @name petdom.landing-page:LandingPageController
   * @module petdom.landing-page
   *
   * @description
   * Controller which asks prism credentials for prism elements
   */
  LandingPageController.$inject = ['$scope', 'layoutService', '$modal', '$window'];
  function LandingPageController($scope, layoutService, $modal, $window) {
    var ctrl = this;
    ctrl.searchedLocation = null;
    ///////////
    activate();

    function activate() {
      layoutService.setLayout('landing-page');
    }

    angular.element($window).on('scroll', function() {
      var scroll = angular.element($window).scrollTop();

      if (scroll >= 50) {
        angular.element('#header').addClass('fixed');
      } else {
        angular.element('#header').removeClass('fixed');
      }
    });
  }


})();
