angular.module('petdom.templates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('petset/app/components/initialise-petdom/initialise-petdom.html',
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


  $templateCache.put('petset/app/components/initialise-petdom/pet-details/pet-details-modal.html',
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


  $templateCache.put('petset/app/components/landing-page/landing-page.html',
    "<section class=\"banner\" role=\"banner\">\n" +
    "  <!-- banner text -->\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"col-md-10 col-md-offset-1\">\n" +
    "      <div class=\"banner-text text-center\">\n" +
    "        <h1>FIND A PET TO ADOPT</h1>\n" +
    "        <form class=\"form-inline main-search\">\n" +
    "          <div class=\"form-group\">\n" +
    "            <input type=\"text\" class=\"form-control\" placeholder=\"Enter City, location, breed or name\"\n" +
    "          g-places-autocomplete\n" +
    "          ng-model=\"homeCtrl.searchedLocation\"\n" +
    "          id=\"petLocation\"/>\n" +
    "          </div>\n" +
    "          <div class=\"form-group\">\n" +
    "            <select class=\"form-control\">\n" +
    "              <option value=\"\" selected>Any breed</option>\n" +
    "              <option>German Shephard</option>\n" +
    "              <option>Breed 2</option>\n" +
    "              <option>Breed 3</option>\n" +
    "              <option>Breed 4</option>\n" +
    "            </select>\n" +
    "\n" +
    "          </div>\n" +
    "          <button type=\"submit\" class=\"btn btn-warning\">Search</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "<!-- Features Section -->\n" +
    "<section class=\"features\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <img src=\"images/giveaway.png\">\n" +
    "        <h4>GIVE AWAY A PET</h4>\n" +
    "        <p class=\"description\">\n" +
    "          List your Pet for adoption and spread the love. Let's help Pet find the right home for them\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <img src=\"images/findpet.png\">\n" +
    "        <h4>Find a pet</h4>\n" +
    "        <p class=\"description\">\n" +
    "          Search for pets that are looking for home in your locality. Get them home and find the unconditional love\n" +
    "        </p>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <img src=\"images/ownpet.png\">\n" +
    "        <h4>Own a pet</h4>\n" +
    "        <p class=\"description\">\n" +
    "          Express your interest and we will get in touch with you for all your pet related query. Happy Petting\n" +
    "        </p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "\n" +
    "<!-- Recently Added Pets -->\n" +
    "<section class=\"recently-added\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <h3 class=\"heading\">Recently Added</h3>\n" +
    "      <ul class=\"pet-list\">\n" +
    "        <li class=\"pet-item\">\n" +
    "          <a href=\"\">\n" +
    "            <div style=\"background-image: url('/images/pet1.jpg')\" class=\"pet-image\">\n" +
    "              <div class=\"pet-details\">\n" +
    "                <h5 class=\"pet-title\">\n" +
    "                   Pitbull Terrier\n" +
    "                </h5>\n" +
    "                <h5 class=\"pet-subtitle\"> Bingham Farms MI (Michigan Humane Society)</h5>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "\n" +
    "          <div class=\"pet-info\">\n" +
    "            <h4 class=\"pet-name\" title=\"\"> King </h4>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"pet-social\">\n" +
    "            <a href=\"\">\n" +
    "              <i class=\"glyphicon glyphicon-heart-empty\"></i>\n" +
    "            </a>\n" +
    "            <a href=\"\">\n" +
    "              Share\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li class=\"pet-item\">\n" +
    "          <a href=\"\">\n" +
    "            <div style=\"background-image: url('/images/pet4.jpeg')\" class=\"pet-image\">\n" +
    "              <div class=\"pet-details\">\n" +
    "                <h5 class=\"pet-title\">\n" +
    "                   Chihuahua\n" +
    "                </h5>\n" +
    "                <h5 class=\"pet-subtitle\"> Oakland and Dublin CA (East Bay SPCA)</h5>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "\n" +
    "          <div class=\"pet-info\">\n" +
    "            <h4 class=\"pet-name\" title=\"\"> Phantom </h4>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"pet-social\">\n" +
    "            <a href=\"\">\n" +
    "              <i class=\"glyphicon glyphicon-heart-empty\"></i>\n" +
    "            </a>\n" +
    "            <a href=\"\">\n" +
    "              Share\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li class=\"pet-item\">\n" +
    "          <a href=\"\">\n" +
    "            <div style=\"background-image: url('/images/pet2.jpeg')\" class=\"pet-image\">\n" +
    "              <div class=\"pet-details\">\n" +
    "                <h5 class=\"pet-title\">\n" +
    "                   Boxer\n" +
    "                </h5>\n" +
    "                <h5 class=\"pet-subtitle\"> Bingham Farms MI (Michigan Humane Society)</h5>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "\n" +
    "          <div class=\"pet-info\">\n" +
    "            <h4 class=\"pet-name\" title=\"\"> Dakota </h4>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"pet-social\">\n" +
    "            <a href=\"\">\n" +
    "              <i class=\"glyphicon glyphicon-heart-empty\"></i>\n" +
    "            </a>\n" +
    "            <a href=\"\">\n" +
    "              Share\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "        <li class=\"pet-item\">\n" +
    "          <a href=\"\">\n" +
    "            <div style=\"background-image: url('/images/pet3.jpeg')\" class=\"pet-image\">\n" +
    "              <div class=\"pet-details\">\n" +
    "                <h5 class=\"pet-title\">\n" +
    "                   Pug\n" +
    "                </h5>\n" +
    "                <h5 class=\"pet-subtitle\"> San Francisco CA (Copper's Dream Rescue)</h5>\n" +
    "              </div>\n" +
    "            </div>\n" +
    "          </a>\n" +
    "\n" +
    "          <div class=\"pet-info\">\n" +
    "            <h4 class=\"pet-name\" title=\"\"> Hugo </h4>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"pet-social\">\n" +
    "            <a href=\"\">\n" +
    "              <i class=\"glyphicon glyphicon-heart-empty\"></i>\n" +
    "            </a>\n" +
    "            <a href=\"\">\n" +
    "              Share\n" +
    "            </a>\n" +
    "          </div>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "      <a href=\"\" class=\"btn btn-warning look-more\">See more </a>\n" +
    "      <p>{{ homeCtrl.searchedLocation }}</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n" +
    "\n" +
    "<!-- Stats card -->\n" +
    "\n" +
    "<section class=\"stats-card text-center\">\n" +
    "  <div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <h4 class=\"title\">Total Verified Listings</h4>\n" +
    "        <h3 class=\"count\">15,000</h3>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <h4 class=\"title\">Listings Added Today</h4>\n" +
    "        <h3 class=\"count\">300</h3>\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        <h4 class=\"title\">Pets Adopted</h4>\n" +
    "        <h3 class=\"count\">1,500</h3>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</section>\n"
  );


  $templateCache.put('petset/app/templates/header.html',
    "<header id=\"header\" class=\"fixed\">\n" +
    "  <div class=\"header-content clearfix\"> <a class=\"logo\" href=\"index.html\">Petdom</a>\n" +
    "    <nav class=\"navigation open\" role=\"navigation\">\n" +
    "      <ul class=\"primary-nav\">\n" +
    "        <li><a href=\"#\" class=\"\">Download App</a></li>\n" +
    "        <li><a href=\"#\" class=\"\">Features</a></li>\n" +
    "        <li><a href=\"#\" class=\"\">Blog</a></li>\n" +
    "        <li><a href=\"#\" class=\"\">Login / SignUp</a></li>\n" +
    "      </ul>\n" +
    "    </nav>\n" +
    "    <a href=\"#\" class=\"nav-toggle close-nav\">Menu<span></span></a> </div>\n" +
    "</header>\n"
  );

}]);
