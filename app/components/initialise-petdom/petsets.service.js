(function () {
  'use strict';

  angular
    .module('petdom.initialise-petdom')
    .factory('petSetsService', petSetsService);

  /**
   * @ngdoc service
   * @name petdom.initialise-petdom.petSetsService
   * @module petdom.initialise-petdom
   *
   * @description
   * A service which returns pets
   * Todo: other selection on entities json and modification
   */
  petSetsService.$inject = ['$http'];
  function petSetsService($http) {
    var service;

    service = {
      getPets: getPets
    };

    return service;

    /////////////////

    /**
     * @ngdoc method
     * @name getSelectedElems
     * @methodOf petdom.initialise-petdom.petSetsService
     * @returns {Object} returns available pets
     * @description looks for all pets
     */
    function getPets() {
      return $http.get('../../../petlist.json')
        .then(function(response) {
          return response.data;
        })
    }
  }
})();
