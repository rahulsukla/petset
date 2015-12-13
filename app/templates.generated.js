angular.module('petdom.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('static/app/components/initialise-petdom/initialise-petdom.html',
    "<div class=\"filter-bar\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "\n" +
    "    <a href=\"\" class=\"filter\">\n" +
    "      <i class=\"glyphicon glyphicon-filter\"></i> Filter\n" +
    "    </a>\n" +
    "\n" +
    "    <span class=\"pets-count\"> <strong>{{ initCtrl.pets.objects.length }} Pets</strong> Available</span>\n" +
    "\n" +
    "    <a href=\"\" class=\"sort\"> Most Recent\n" +
    "      <i class=\"glyphicon glyphicon-chevron-down\"></i>\n" +
    "    </a>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"container-fluid pets-container\">\n" +
    "  <ul masonry class=\"pet-list\">\n" +
    "    <li class=\"masonry-brick pet-item\" ng-repeat=\"pet in initCtrl.pets.objects\">\n" +
    "      <a href=\"\" ng-click=\"initCtrl.openPetDetails(pet.id)\">\n" +
    "        <div ng-style=\"{'background-image': 'url({{ pet.pic_urls[0] }})'}\" class=\"pet-image\">\n" +
    "          <div class=\"pet-details\">\n" +
    "            <h5 class=\"pet-title\">\n" +
    "              {{ pet.breed }}\n" +
    "            </h5>\n" +
    "            <h5 class=\"pet-subtitle\"> {{ pet.city }}, {{ pet.country }}</h5>\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </a>\n" +
    "\n" +
    "      <div class=\"pet-info\">\n" +
    "        <h4 class=\"pet-name\" title=\"{{ pet.name }}\"> {{ pet.name }} </h4>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"pet-social\">\n" +
    "        <a href=\"\">\n" +
    "          <i class=\"glyphicon glyphicon-heart-empty\"></i>\n" +
    "        </a>\n" +
    "        <a href=\"\">\n" +
    "          Share\n" +
    "        </a>\n" +
    "      </div>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('static/app/components/initialise-petdom/pet-details/pet-details-modal.html',
    "<div id=\"pet-details\">\n" +
    "<a id=\"close\" title=\"close\" ng-click=\"$dismiss()\">\n" +
    "  <i class=\"glyphicon glyphicon-plus\"></i>\n" +
    "</a>\n" +
    "  <div class=\"modal-body\">\n" +
    "    <div class=\"row\">\n" +
    "      <h4 class=\"pet-name\">{{ petInfoCtrl.petDetails.name }}</h4>\n" +
    "      <div class=\"col-sm-7 first-half\">\n" +
    "        <img src=\"{{ petInfoCtrl.petDetails.pic_urls[0] }}\">\n" +
    "        <div class=\"description\">\n" +
    "          <p>{{ petInfoCtrl.petDetails.description }}</p>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "      <div class=\"col-sm-5 second-half\">\n" +
    "        <dl>\n" +
    "          <dt>\n" +
    "            Breed\n" +
    "          </dt>\n" +
    "          <dd>\n" +
    "            {{ petInfoCtrl.petDetails.breed }}\n" +
    "          </dd>\n" +
    "          <dt>\n" +
    "            Gender\n" +
    "          </dt>\n" +
    "          <dd>\n" +
    "            <span ng-if=\"petInfoCtrl.petDetails.gender  ==  'M'\"> Male</span>\n" +
    "            <span ng-if=\"petInfoCtrl.petDetails.gender  ==  'F'\"> Female</span>\n" +
    "          </dd>\n" +
    "          <dt>\n" +
    "            NEUTERED\n" +
    "          </dt>\n" +
    "          <dd>\n" +
    "            Yes\n" +
    "          </dd>\n" +
    "          <dt>\n" +
    "            Kid Friendly\n" +
    "          </dt>\n" +
    "          <dd>\n" +
    "            undefined\n" +
    "          </dd>\n" +
    "          <dt>\n" +
    "            Cat Friendly\n" +
    "          </dt>\n" +
    "          <dd>\n" +
    "            undefined\n" +
    "          </dd>\n" +
    "        </dl>\n" +
    "        <a href=\"\" class=\"btn btn-warning btn-block\"> <strong>Adopt</strong></a>\n" +
    "        <div class=\"divider\"></div>\n" +
    "        <h4> {{ petInfoCtrl.petDetails.seller_name }} </h4>\n" +
    "        <address>\n" +
    "          <strong>Address</strong><br>\n" +
    "          1355 Saket Market <br>Street, Suite 900<br>\n" +
    "          Delhi, 11092<br>\n" +
    "          <abbr title=\"Phone\">p:</abbr> {{ petInfoCtrl.petDetails.phone }}\n" +
    "        </address>\n" +
    "        <h4>About the Owner</h4>\n" +
    "        <p>We love dogs. We love saving them. We love finding them loving homes. We're a San Francisco Bay Area all-breed dog rescue saving dogs from shelters throughout India.</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('static/app/templates/header.html',
    "<nav class=\"navbar navbar-default navbar-fixed-top\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a class=\"navbar-brand petdom-logo\" href=\"/\">\n" +
    "        <h4> Petdom </h4>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>\n"
  );

}]);
