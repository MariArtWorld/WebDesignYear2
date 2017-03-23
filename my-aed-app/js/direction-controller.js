angular.module("app")
    .controller('directionController', function ($scope, locationService) {
        $scope.places = [];

        var dublin = { lat: 53.3416542, lng: -6.2570467 };
        var infoWindow = new google.maps.InfoWindow();

        var map = new google.maps.Map(document.getElementById('map2'), {
            center: dublin,
            zoom: 16,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            disableDefaultUI: true
        });

         locationService.getLocations()
         .then(function(places){
            $scope.places = places;
            addAnotherMarker()
            $scope.places.forEach(function(place){
                addMarker(place);

                var flightPath = new google.maps.Polyline({
                  path: [dublin, place.location],
                  geodesic: true,
                  strokeColor: '#FF0000',
                  strokeOpacity: 1.0,
                  strokeWeight: 2
                });

                flightPath.setMap(map);
            })
         });



         function addMarker(place) {
             var marker = new google.maps.Marker({
                 map: map,
                 position: place.location,
                 icon: {
                   url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
                     anchor: new google.maps.Point(10, 10),
                     scaledSize: new google.maps.Size(20, 27)
                 }
             });

             var aedInfo = "<h2>" + place.name + "</h2>" + place.information;
             google.maps.event.addListener(marker, 'click', function () {
                     infoWindow.setContent(aedInfo);
                     infoWindow.open(map, marker);
             });
         }
         function addAnotherMarker() {
             var marker = new google.maps.Marker({
                 map: map,
                 position: dublin,
                 icon: {
                   url: 'https://maps.google.com/mapfiles/kml/shapes/library_maps.png',
                     anchor: new google.maps.Point(10, 10),
                     scaledSize: new google.maps.Size(20, 27)
                 }
             });
             var here = "<h3>You Are Here</h3>";

             google.maps.event.addListener(marker, 'click', function () {
                     infoWindow.setContent(here);
                     infoWindow.open(map, marker);
             });
           }
    })
