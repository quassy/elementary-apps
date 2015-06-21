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
    var map = L.map('map').setView([0.0,0.0], 1);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '<a href="http://osm.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    /*
        Based off https://www.google.com/maps/d/edit?mid=zLqMqL5D9Kik.kCCCFPX-oBT0
        This is a map of the general locations of the elementary contributors.  To some, anonymity is paramount.  If that's the case, just put a placemark near your approximate location (i.e. nearest major city).
    */
    
    var markers = [ // start markers
{
    'name': 'Dane Henson (LocalHero)',
    'pos': [-97.325134,32.745703,0.0]
},
{
    'name': 'Pim Vullers (pimvullers)',
    'pos': [6.075439,51.296276,0.0]
},
{
    'name': 'Akshay Shekher (voldyman)',
    'pos': [76.777267,30.72649,0.0]
},
{
    'name': 'Fernand Freire (ffreire)',
    'pos': [-122.671967,45.513084,0.0]
},
{
    'name': 'Chris Triantafillis (clepto)',
    'pos': [20.643313,39.300299,0.0]
},
{
    'name': 'Sergey Davidoff (shnatsel)',
    'pos': [37.441406,55.578345,0.0]
},
{
    'name': 'Corentin Noël (tintou)',
    'pos': [2.422123,48.640247,0.0]
},
{
    'name': 'Ivo Nunes (ivonunes)',
    'pos': [-9.039345,38.89333800000001,0.0]
},
{
    'name': 'Jaap Broekhuizen (jaapz)',
    'pos': [6.526006,53.232711,0.0]
},
{
    'name': 'Fabian Thoma (agent00tai)',
    'pos': [7.621593,47.631388,0.0]
},
{
    'name': 'Cody Garver',
    'pos': [-90.35156200000002,31.952162,0.0]
},
{
    'name': 'Leonardo Lemos (leonardolemos)',
    'pos': [-40.429687,-20.96144,0.0]
},
{
    'name': 'Daniel Foré (DanRabbit)',
    'pos': [-121.4978,38.582526,0.0]
},
{
    'name': 'Cassidy James Blaede',
    'pos': [-92.462697,42.511218,0.0]
},
{
    'name': 'Eduard Gotwig (gotwig)',
    'pos': [7.086182,50.963617,0.0]
},
{
    'name': 'Tom Beckmann (tom95)',
    'pos': [10.555115,51.878187,0.0]
},
{
    'name': 'Eshat Cakar (eshat)',
    'pos': [8.55835,52.018698,0.0]
},
{
    'name': 'Victor Eduardo (victored)',
    'pos': [-90.386461,14.6707715,0.0]
},
{
    'name': 'Florian Reifschneider (flore2003)',
    'pos': [-2.988281,53.891391,0.0]
},
{
    'name': 'Florian Reifschneider (flore2003)',
    'pos': [-81.738281,25.165173,0.0]
},
{
    'name': 'SamTate',
    'pos': [-2.109375,53.330873,0.0]
},
{
    'name': 'Lucas Baudin (xapantu)',
    'pos': [2.285156,48.893615,0.0]
},
{
    'name': 'Marcus Lundgren (GreeL)',
    'pos': [15.616379,58.409626,0.0]
},
{
    'name': 'Raphael Isemann (teemperor)',
    'pos': [10.327148,47.694974,0.0]
},
{
    'name': 'Placemark 25',
    'pos': [4.300804,52.068744,0.0]
},
{
    'name': 'Kiran Hampal (khampal)',
    'pos': [-2.318115,53.343993,0.0]
},
{
    'name': 'Arthur Tucker (Altkey/Mars11)',
    'pos': [-111.880732,40.889347,0.0]
},
{
    'name': 'Erasmo Marín (erasmo-marin)',
    'pos': [-71.243591,-32.997146,0.0]
},
{
    'name': 'Daniel Kur',
    'pos': [-17.050781,65.549367,0.0]
},
{
    'name': 'Adrian Widerski (Dikoo)',
    'pos': [25.751953,54.41893,0.0]
},
{
    'name': 'Levi Voorintholt (piratelv)',
    'pos': [6.9385639,52.9959535,0.0]
},
{
    'name': 'Niels Avonds (niels-avonds)',
    'pos': [4.683773,50.866298,0.0]
},
{
    'name': 'Mario Guerriero (Mefrio)',
    'pos': [10.546875,42.94033900000001,0.0]
},
{
    'name': 'Andrea Basso (voluntatefaber)',
    'pos': [9.18457,45.444717,0.0]
},
{
    'name': 'David Gomes (munchor)',
    'pos': [-8.5275085,40.3893329,0.0]
},
{
    'name': 'Paulo Galardi',
    'pos': [-45.351562,-23.402765,0.0]
},
{
    'name': 'Carl',
    'desc': 'Working on Noise on the banks of the Rhone.<br>Or the Soane.<br>Depends on the day :)',
    'pos': [4.808349,45.67548200000001,0.0]
},
{
    'name': 'schuhmannsteffen',
    'pos': [7.03125,49.224773,0.0]
},
{
    'name': 'Niclas Lockner (lockner)',
    'pos': [20.255935,63.823711,0.0]
},
{
    'name': 'Ezra Sharp (nicekiwi)',
    'pos': [172.637073,-43.529882,0.0]
},
{
    'name': 'Aleksandar Todorovic (translations, bug reporting)',
    'pos': [18.8195801,44.8792281,0.0]
},
{
    'name': 'Harvey Cabaguio',
    'pos': [-97.1411133,49.9017112,0.0]
},
{
    'name': 'Marvin Beckers (embik)',
    'pos': [6.8005371,50.67035390000001,0.0]
},
{
    'name': 'Felipe (philip-scott)',
    'pos': [-103.3559418,20.6572012,0.0]
},
{
    'name': 'Emersion',
    'pos': [2.2288513,48.702744,0.0]
}
    ] // end of markers
    
    for (m of markers) {
        L.marker(m.pos).addTo(map)
            .bindPopup(m.name);
    }
</script>