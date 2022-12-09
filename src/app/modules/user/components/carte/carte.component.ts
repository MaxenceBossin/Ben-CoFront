import { Component, OnInit, Input, OnChanges } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import { Control } from 'leaflet';
import LayersOptions = Control.LayersOptions;
import { DumpsterService } from 'src/app/service/dumpster/dumpster.service';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit, OnChanges {
  @Input() filterParam = -1; // decorate the property with @Input()
  @Input() filterParamType = ''; // decorate the property with @Input()

  public lat = 43.60899203730793;
  public lon = 1.4338861683142448;
  public geolocationPosition: any;

  private tab: L.Marker[] = [];

  // Open Street Map Definition
  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,
      attribution: 'Open Street Map'
    })
  };

  // Values to bind to Leaflet Directive
  layersControlOptions: LayersOptions = { position: 'bottomright' };
  baseLayers = {
    'Open Street Map': this.LAYER_OSM.layer
  };
  zoom = 17;
  center = L.latLng([this.lat, this.lon]);


  // Marker cluster stuff
  markerClusterGroup: L.MarkerClusterGroup = L.markerClusterGroup();
  markerClusterData: L.Marker[] = [];

  constructor(private DumpsterService: DumpsterService) { }

  ngOnInit() {
    this.generateData();
  }

  ngOnChanges() {
    console.log("filterParam", this.filterParam);
    console.log("filterParamType", this.filterParamType);
    this.generateData();
  }

  markerClusterReady(group: L.MarkerClusterGroup) {

    this.markerClusterGroup = group;

  }

  refreshData(): void {
    console.log(this.tab);
    this.markerClusterData = this.tab;
    console.log("refresh");

  }

  //@ts-ignore

  generateData(): L.Marker[] {

    // const dataMarker: L.Marker[] = [];

    this.tab = [];

    this.DumpsterService.getAllDumpsters().subscribe((data: any) => {
      for (let i = 0; i < 1993; i++) {
        switch (this.filterParam) {
          case -1:
            switch (this.filterParamType) {
              case "":
                console.log("1");

                this.addMarkers(data[i]);
                break;
              default:
                console.log("2");

                if (this.filterParamType == data[i]["type"]) {
                  this.addMarkers(data[i]);
                }
                break;
            }
            break;
          default:
            switch (this.filterParamType) {
              case "":
                console.log("3");

                if (this.distance(this.lat, this.lon, data[i]["latitude"], data[i]["longitude"], "K") <= this.filterParam) {
                  this.addMarkers(data[i]);
                }
                break;
              default:
                console.log("4");

                if ((this.filterParamType == data[i]["type"]) && (this.distance(this.lat, this.lon, data[i]["latitude"], data[i]["longitude"], "K") <= this.filterParam)) {
                  this.addMarkers(data[i]);
                }
                break;
            }
            break;
        }
        if (i == 1992) {
          this.refreshData();
        }
      };
    })
  }

  addMarkers(data: any) {
    var markerVerre = L.icon({
      iconUrl: './assets/images/marker_verre.png',
      iconSize: [30.75, 50.25], // size of the icon
      iconAnchor: [10.75, 25.25], // point of the icon which will correspond to marker's location
      popupAnchor: [5, -30] // point from which the popup should open relative to the iconAnchor
    });

    var markerTextile = L.icon({
      iconUrl: './assets/images/marker_textile.png',
      iconSize: [30.75, 50.25], // size of the icon
      iconAnchor: [10.75, 25.25], // point of the icon which will correspond to marker's location
      popupAnchor: [5, -30] // point from which the popup should open relative to the iconAnchor
    });

    var markerOrdures = L.icon({
      iconUrl: './assets/images/marker_ordures.png',
      iconSize: [30.75, 50.25], // size of the icon
      iconAnchor: [10.75, 25.25], // point of the icon which will correspond to marker's location
      popupAnchor: [5, -30] // point from which the popup should open relative to the iconAnchor
    });

    var markerCollecte = L.icon({
      iconUrl: './assets/images/marker_collecte.png',
      iconSize: [30.75, 50.25], // size of the icon
      iconAnchor: [10.75, 25.25], // point of the icon which will correspond to marker's location
      popupAnchor: [5, -30] // point from which the popup should open relative to the iconAnchor
    });


    switch (data["type"]) {
      case "verre":
        this.tab.push(L.marker([data["latitude"], data["longitude"]], { icon: markerVerre }).bindPopup("<h4 style='text-align:center;'>Benne à verre <br> Adresse: " + data["street_number"] + " " + data["street_label"] + ", " + data["city"] + " " + data["postal_code"]));
        break;
      case "textile":
        this.tab.push(L.marker([data["latitude"], data["longitude"]], { icon: markerTextile }).bindPopup("<h4 style='text-align:center;'>Benne à textile <br> Adresse: " + data["street_number"] + " " + data["street_label"] + ", " + data["city"] + " " + data["postal_code"]));
        break;
      case "ordures ménagères":
        this.tab.push(L.marker([data["latitude"], data["longitude"]], { icon: markerOrdures }).bindPopup("<h4 style='text-align:center;'>Ordures ménagères <br> Adresse: " + data["street_number"] + " " + data["street_label"] + ", " + data["city"] + " " + data["postal_code"]));
        break;
      case "collecte sélective":
        this.tab.push(L.marker([data["latitude"], data["longitude"]], { icon: markerCollecte }).bindPopup("<h4 style='text-align:center;'>Collecte sélective <br> Adresse: " + data["street_number"] + " " + data["street_label"] + ", " + data["city"] + " " + data["postal_code"]));
        break;
      default:
        console.log("No such type exists!");
        break;
    }
  }

  private distance(lat1: any, lon1: any, lat2: any, lon2: any, unit: any) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") { dist = dist * 1.609344 }
      if (unit == "N") { dist = dist * 0.8684 }
      return dist;
    }
  }

  placeSelected(event: any) {
    this.lat = event.properties.lat;
    this.lon = event.properties.lon;
    this.center = L.latLng([this.lat, this.lon]);
    // this.map.remove();
    // this.initMap(this.lat, this.lon, -1, "");
  }

  getGeolocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
            this.lat = position.coords.latitude,
            this.lon = position.coords.longitude,
            this.center = L.latLng([this.lat, this.lon]);
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    };

  }
}
