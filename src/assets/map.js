console.log('coucou');

/*INITIALISATION DE LA MAP ----------------------*/
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


/*MARKER CUSTOM------------------------------------*/
var greenIcon = L.icon({
    iconUrl: 'marker.png',

    iconSize: [43, 78], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([51.5, -0.09], { icon: greenIcon }).addTo(map).bindPopup("Je suis une benne");


/* INTERACTION AU CLIC DE LA MAP (alerte)--------------------*/
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

/* INTERACTION PAR POPUP AU LIEU D'UNE ALERTE*/
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


/* GEOJSON--------------------------------------------- */
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

L.geoJSON(geojsonFeature).addTo(map);

const api_url = 'https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=points-dapport-volontaire-dechets-et-moyens-techniques&q=&rows=30&facet=commune&facet=details_source_geoloc&facet=details_source_attributaire&facet=type_flux&facet=prestataire&facet=centre_ville&facet=zone&refine.flux=R%C3%A9cup%27verre';

      async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude } = data;

        document.getElementById('lat').textContent = latitude.toFixed(2);
        document.getElementById('lon').textContent = longitude.toFixed(2);

        console.log('lat');
      }

      getISS();
