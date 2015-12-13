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
      return $http.jsonp('http://169.54.252.164:8000/api/v1/listing/?username=ppp3&api_key=170a41767f6ba69112aa51629e65490266110c7a&id=' + petId + '&callback=JSON_CALLBACK')
        .then(function(response) {
          return response.data;
        })
    }
  }
})();
