(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  function HomeController($scope) {
    var vm = this;

    // set a default to center on before the API call for the marker
    $scope.center = {
      lat: 35,
      lng: -90,
      zoom: 3
    };

    var poiLat, poiLng, title, res;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/poi', true);
    xhr.send();

    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        res = JSON.parse(xhr.response);

        poiLat = parseFloat(res.latitude);
        poiLng = parseFloat(res.longitude);
        title = res.name;

        $scope.markers = {
          poi: {
            lat: poiLat,
            lng: poiLng,
            focus: true,
            title: title,
            alt: title
          }
        };
      }
    }


  }
}());
