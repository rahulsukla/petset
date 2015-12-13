(function () {
  'use strict';

  angular
    .module('petdom.initialise-petdom')
    .factory('petDetailsService', petDetailsService);

  /**
   * @ngdoc service
   * @name petdom.initialise-petdom.petDetailsService
   * @module petdom.initialise-petdom
   *
   * @description
   * A service which returns pet details
   */
  petDetailsService.$inject = ['$http'];
  function petDetailsService($http) {
    var service;

    service = {
      getDetail: getDetail
    };

    return service;

    /////////////////

    /**
     * @ngdoc method
     * @name getDetail
     * @methodOf petdom.initialise-petdom.petDetailsService
     * @returns {Object} returns available pets
     */
    function getDetail(petId) {
      return $http.get('../../../../pet-details.json')
        .then(function(response) {
          return response.data;
        })
    }
  }
})();
