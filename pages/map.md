---
layout: page
title: developer map
permalink: /map/
---

<div id="map" style="height:500px;width:100%"></div>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />
<script src="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
<script style="text/javascript">
    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map').setView([51.505, -0.09], 13);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var markers = [
      {
        'name': 'Daniel Fore',
        'desc': 'elementary co-founder',
        'pos': [51.5, -0.09]
      },
      {
        'name': 'Cassidy James Blaede',
        'desc': 'elementary co-founder',
        'pos': [51.5, 0.5]
      }
    ] // end of markers
    
    for (marker in markers) {
        L.marker(marker.pos).addTo(map)
            .bindPopup(marker.name)       
    }

    // add a marker in the given location, attach some popup content to it and open the popup
    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup. <br/> Easily customizable.')
        .openPopup();
</script>
