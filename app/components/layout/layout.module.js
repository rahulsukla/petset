(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name petdom.layout
   * @module petdom.layout
   *
   * @description
   * # Layout module
   *
   * Module to allow pages and controllers to set a custom layout.
   *
   * The following variables are set on `$rootScope`:
   *
   * - `layout`: The name of the custom layout. Set to 'default' if no custom layout has been set.
   *
   * - `layoutClass`: Set to 'layout-[`layout`]'
   *
   * - `customLayout`: Set to `true` if a custom layout has been set.
   */
  angular.module('petdom.layout', []);
})();
