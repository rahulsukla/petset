(function () {
  'use strict';

  angular
    .module('petdom.layout')
    .run(initializeLayout);

  // Initialises the default layout
  initializeLayout.$inject = ['layoutService'];
  function initializeLayout(layoutService) {
    layoutService.setLayout('default');
  }
})();
