var APIkey = "AIzaSyBcHrxkiSw3HJTakt1dGn7Y2CL4_ZaqRrw"
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 50.841000,
            lng: -0.142100
                }
        });
        
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        {lat: 50.841244, lng: -0.142189},
        {lat: 51.5612, lng: -0.0835},
        ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});}

    
    