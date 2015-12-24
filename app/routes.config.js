(function () {
  'use strict';

  angular
    .module('petdom')
    .config(locationConfig)
    .config(routes);

  locationConfig.$inject = ['$locationProvider'];
  function locationConfig($locationProvider) {
    $locationProvider.html5Mode(false);
  }

  routes.$inject = ['$routeProvider', '$httpProvider'];
  function routes($routeProvider, $httpProvider) {
    $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

    $routeProvider
      .when('/', {
        templateUrl: 'app/components/landing-page/landing-page.html',
        controller: 'LandingPageController',
        controllerAs: 'homeCtrl'
      })

      .otherwise({redirectTo: '/'});
  }
})();
