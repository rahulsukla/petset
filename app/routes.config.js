(function () {
  'use strict';

  angular
    .module('petdom')
    .config(locationConfig)
    .config(routes);

  locationConfig.$inject = ['$locationProvider'];
  function locationConfig($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    }).hashPrefix('!');
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
        templateUrl: 'static/app/components/initialise-petdom/initialise-petdom.html',
        controller: 'initialisePetdomController',
        controllerAs: 'initCtrl',
        resolve: {
          petSets: ['petSetsService', function (petSetsService) {
            return petSetsService.getPets()
              .catch(function() {
                return false;
              })
          }]
        }
      })

      .otherwise({redirectTo: '/'});
  }
})();
