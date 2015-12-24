(function () {
  'use strict';

  angular
    .module('petdom.layout')
    .factory('layoutService', layoutService);

  /**
   * @ngdoc service
   * @name petdom.layout.layoutService
   * @module petdom.layout
   *
   * @description
   * Service that can be used to set document layout. This layout is set in `$rootScope` variables
   * and can be set as a class on the document and used to make layout styling or inclusion changes.
   *
   * See the {@link petdom.layout module description} for more information.
   */
  layoutService.$inject = ['$rootScope'];
  function layoutService($rootScope) {
    var changingToDefaultRoute = false;
    var service;

    service = {
      setLayout: setLayout
    };

    activate();

    return service;

    /////////////////

    function activate() {
      // Change to the default layout on a route change, unless we
      // are told to set a custom layout during the change.
      $rootScope.$on('$routeChangeStart', function () {
        changingToDefaultRoute = true;
      });

      $rootScope.$on('$routeChangeSuccess', function () {
        if (changingToDefaultRoute) {
          setLayout('default');
        }
      });
    }

    /**
     * @ngdoc method
     * @name setLayout
     * @methodOf petdom.layout.layoutService
     * @param {string} layout The name of the layout to set
     * @description Sets a custom layout. To set the default layout, pass 'default' as the layout name.
     */
    function setLayout(layout) {
      changingToDefaultRoute = false;

      $rootScope.layout = layout;
      $rootScope.layoutClass = 'layout-' + layout;
      $rootScope.customLayout = (layout !== 'default');
    }
  }
})();
