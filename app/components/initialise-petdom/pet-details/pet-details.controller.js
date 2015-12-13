(function () {
  'use strict';

  angular.module('petdom.initialise-petdom')
    .controller('petDetailsController', petDetailsController);

  /**
   * @ngdoc controller
   * @name petdom.initialise-petdom:petDetailsController
   * @module petdom.initialise-petdom
   *
   * @description
   * Controller for displaying pet details
   */
  petDetailsController.$inject = ['$scope', 'petId', 'petDetailsService'];
  function petDetailsController($scope, petId, petDetailsService) {
    var ctrl = this;
    ctrl.petId = petId;
    ctrl.petDetails = {};

    //////////////
    activate();

    function activate() {
      return petDetailsService.getDetail(ctrl.petId)
        .then(function(petData){
          if (petData.objects) {
            console.log(petData);
            ctrl.petDetails = petData.objects[0];
          };
        });
    }
  }

})();
