(function () {
  'use strict';

  angular.module('petdom.initialise-petdom')
    .controller('initialisePetdomController', initialisePetdomController);

  /**
   * @ngdoc controller
   * @name petdom.initialise-petdom:initialisePetdomController
   * @module petdom.initialise-petdom
   *
   * @description
   * Controller which asks prism credentials for prism elements
   */
  initialisePetdomController.$inject = ['$scope', 'petSets', '$modal'];
  function initialisePetdomController($scope, petSets, $modal) {
    var ctrl = this;
    ctrl.pets = petSets;
    ctrl.openPetDetails = openPetDetails;
    console.log(ctrl.pets);

    //////////////

    function openPetDetails (petId) {
      $modal.open({
        templateUrl: 'static/app/components/initialise-petdom/pet-details/pet-details-modal.html',
        controller: 'petDetailsController',
        controllerAs: 'petInfoCtrl',
        resolve: {
          petId: function () {
            return petId;
          }
        },
        windowClass: 'pet-detail-modal'
      });
    }
  }

})();
