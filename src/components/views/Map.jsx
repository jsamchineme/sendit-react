import React from 'react';

export default class Map {
  static setup() {
    var resource = document.createElement('script');
    resource.async = "true";
    resource.defer = "true";
    resource.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4ITGsCxJfcerDzfxMf4it_jClp_44PKE&callback=window.initMap";
    var script = document.getElementsByTagName('script')[0];
    script.parentNode.insertBefore(resource, script);
  }
  static init() {
    window.mapReady = true;
    console.log('Map Ready');
  }
  /**
   * InitialiseMap
   * @static
   * @returns {void} 
   */
  static initMap(from, to) {
    let bounds = new google.maps.LatLngBounds;
    let markersArray = [];
  
    let origin1 = from;
    let destinationA = to;
  
    let destinationIcon = 'https://chart.googleapis.com/chart?' +
        'chst=d_map_pin_letter&chld=D|FF0000|000000';
    let originIcon = 'https://chart.googleapis.com/chart?' +
        'chst=d_map_pin_letter&chld=O|FFFF00|000000';
    //make map active
    let mapBox = document.getElementById('map');
    if(mapBox) {
      mapBox.classList.add('active');
      let map = new google.maps.Map(mapBox, {
        center: {lat: 55.53, lng: 9.4},
        zoom: 10
      });
  
      let geocoder = new google.maps.Geocoder;
    
      let service = new google.maps.DistanceMatrixService;
      service.getDistanceMatrix({
        origins: [origin1],
        destinations: [destinationA],
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false
      }, (response, status) => {
        if (status !== 'OK') {
          Toast.show({ 
            message: `Map Error: ${status}`, 
            type: 'error', 
            hideAfter: 7000 
          });
        } else {
          let originList = response.originAddresses;
          let destinationList = response.destinationAddresses;
          let outputDiv = document.getElementById('output');
          outputDiv.innerHTML = '<div class="field">Computed Travel Distance</div>';
          Map.deleteMarkers(markersArray);
    
          let showGeocodedAddressOnMap = (asDestination) => {
            let icon = asDestination ? destinationIcon : originIcon;
            return function(results, status) {
              if (status === 'OK') {
                map.fitBounds(bounds.extend(results[0].geometry.location));
                markersArray.push(new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location,
                  icon: icon
                }));
              } else {
                // Toast.show({ 
                //   message: `Geocode was not successful due to: ${status}`, 
                //   type: 'error', 
                //   hideAfter: 7000 
                // });(
                console.log('Geocode was not successful due to: ${status}');
              }
            };
          };
  
          // Direction Service, renderer and Way Points Setups 
          var directionsService = new google.maps.DirectionsService;
          var directionsRenderer = new google.maps.DirectionsRenderer;
          directionsRenderer.setMap(map);
          Map.calculateAndDisplayRoute(from, to, directionsService, directionsRenderer);
    
          for (let i = 0; i < originList.length; i++) {
            let results = response.rows[i].elements;
            geocoder.geocode({'address': originList[i]},
            showGeocodedAddressOnMap(false));
            for (let j = 0; j < results.length; j++) {
              geocoder.geocode({'address': destinationList[j]},
              showGeocodedAddressOnMap(true));
              let distance = results[j].distance || {};
              let duration = results[j].duration || {};
              outputDiv.innerHTML += `<span class='from-text'>${originList[i]}</span>  <span>to</span> 
                <span class='to-text'>${destinationList[j]}</span>
                <div class='map-computation'>
                  <span class='info-group'><label>Distance:</label> ${distance.text}</span>
                  <br><span class='info-group'><label>Drive Time</label>: ${duration.text}</span>
                </div>
                `;
            }
          }
        }
      });
    }

  }

  /**
   * Delete Markers
   * @static
   * @param {Array} markersArray - list of map markers
   */
  static deleteMarkers = (markersArray) => {
    for (let i = 0; i < markersArray.length; i++) {
      markersArray[i].setMap(null);
    }
    markersArray = [];
  }

  /**
   * @static
   * @param {String} from - the pickup location
   * @param {String} to - the destination location
   * @param {Object} directionsService - google directions service
   * @param {Object} directionsRenderer - google directions renderer
   * @returns {void}
   */
  static calculateAndDisplayRoute(from, to, directionsService, directionsRenderer) {
    var waypts = [];

    directionsService.route({
      origin: from,
      destination: to,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        // Toast.show({ 
        //   message: `Directions request failed due to: ${status}`, 
        //   type: 'error', 
        //   hideAfter: 7000 
        // });
        console.log('Directions request failed due to: ${status}');
      }
    });
  }
}

window.initMap = () => Map.init();
window.map = Map;