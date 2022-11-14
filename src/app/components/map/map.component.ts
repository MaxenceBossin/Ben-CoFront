import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

  private map: any;
  private initMap(lat: any, lon: any): void {
    this.map = L.map('map', {
      // center: [43.60899203730793, 1.4338861683142448],
      center: [lat, lon],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 9,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a>',
      className: 'map-tiles'
    }).addTo(this.map);;

    var markerPlastique = L.icon({
      iconUrl: './assets/images/marker_plastique.png',
      iconSize: [30.75, 50.25], // size of the icon
      iconAnchor: [10.75, 25.25], // point of the icon which will correspond to marker's location
      popupAnchor: [5, -30] // point from which the popup should open relative to the iconAnchor
    });

    var markerVerre = L.icon({
      iconUrl: './assets/images/marker_verre.png',
      iconSize: [30.75, 50.25], // size of the icon
      iconAnchor: [10.75, 25.25], // point of the icon which will correspond to marker's location
      popupAnchor: [5, -30] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([43.60899203730793, 1.4338861683142448], { icon: markerVerre }).addTo(this.map).bindPopup("<h4 style='text-align:center;'>Benne à verre <br> Adresse: 20 rue de la liberté, Toulouse</h4> ");
    L.marker([43.58427059082842, 1.4493199584962781], { icon: markerVerre }).addTo(this.map).bindPopup("Je suis une benne LaDen 😄 !!!");
    L.marker([43.59819560098132, 1.4173909409965895], { icon: markerPlastique }).addTo(this.map).bindPopup("Je suis une benne LaDen 😄 !!!");
    L.marker([43.57282977944497, 1.4476033446522087], { icon: markerPlastique }).addTo(this.map).bindPopup("Je suis une benne LaDen 😄 !!!");

    tiles.addTo(this.map);

  }
  

  placeSelected(event: any) {
    console.log(event.properties.lat);
    console.log(event.properties.lon);
    var lat = event.properties.lat;
    var lon = event.properties.lon;
    this.map.remove();
    this.initMap(lat, lon);
  }

  constructor() { }

  ngAfterViewInit(): void {
    this.initMap(43.60899203730793, 1.4338861683142448);
  }
}
