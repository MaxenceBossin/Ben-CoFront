import { Component, OnInit, Input, OnChanges } from '@angular/core';

import * as L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet-routing-machine';
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

  map = L.Map;

  // Marker cluster stuff
  markerClusterGroup: L.MarkerClusterGroup = L.markerClusterGroup();
  markerClusterData: L.Marker[] = [];

  routing = L.Routing.control({
    waypoints: [],
    routeWhileDragging: false,
    show: false,
    addWaypoints: false,
    //@ts-ignore
    createMarker: function () { return null; },
    //@ts-ignore
    draggableWaypoints: false
  })

  // r: any = L.Routing.control({
  //   router: L.Routing.osrmv1({
  //     language: "fr",
  //     profile: "car",
  //   }),
  //   waypoints: [],
  // });

  constructor(private DumpsterService: DumpsterService) { }

  ngOnInit() {
    this.generateData();
    //@ts-ignore
    this.routing.addTo(this.map);
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

  onMapReady(map: L.Map) {
    //@ts-ignore
    this.map = map;
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
                this.addMarkers(data[i]);
                break;
              default:
                if (this.filterParamType == data[i]["type"]) {
                  this.addMarkers(data[i]);
                }
                break;
            }
            break;
          default:
            switch (this.filterParamType) {
              case "":
                if (this.distance(this.lat, this.lon, data[i]["latitude"], data[i]["longitude"], "K") <= this.filterParam) {
                  this.addMarkers(data[i]);
                }
                break;
              default:
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

    let popupInfo = document.createElement('h4')
    popupInfo.style.textAlign = 'center'

    // let btnGo = document.createElement('button');
    // btnGo.className = 'goToBtn';
    // btnGo.append(document.createTextNode('S\'y rendre'))
    // btnGo.onclick = async () => {
    //   this.routeTo(data["latitude"], data["longitude"])
    // }


    switch (data["type"]) {
      case "verre":
        popupInfo.append(
          document.createTextNode("Benne ?? verre"),
          document.createElement('br'),
          document.createTextNode("Adresse: " + data["street_number"] + " " + data["street_label"] + ", " + data["city"] + " " + data["postal_code"]),
          document.createElement('br'),
          // btnGo
        )
        this.tab.push(L.marker([data["latitude"], data["longitude"]], { icon: markerVerre }).bindPopup(popupInfo));
        break;
      case "textile":
        popupInfo.append(
          document.createTextNode("Benne ?? textile"),
          document.createElement('br'),
          document.createTextNode("Adresse: " + data["street_number"] + " " + data["street_label"] + ", " + data["city"] + " " + data["postal_code"]),
          document.createElement('br'),
          // btnGo
        )
        this.tab.push(L.marker([data["latitude"], data["longitude"]], { icon: markerTextile }).bindPopup(popupInfo));
        break;
      case "ordures m??nag??res":
        popupInfo.append(
          document.createTextNode("Ordures m??nag??res"),
          document.createElement('br'),
          document.createTextNode("Adresse: " + data["street_number"] + " " + data["street_label"] + ", " + data["city"] + " " + data["postal_code"]),
          document.createElement('br'),
          // btnGo
        )
        this.tab.push(L.marker([data["latitude"], data["longitude"]], { icon: markerOrdures }).bindPopup(popupInfo));
        break;
      case "collecte s??lective":
        popupInfo.append(
          document.createTextNode("Collecte s??lective"),
          document.createElement('br'),
          document.createTextNode("Adresse: " + data["street_number"] + " " + data["street_label"] + ", " + data["city"] + " " + data["postal_code"]),
          document.createElement('br'),
          // btnGo
        )
        this.tab.push(L.marker([data["latitude"], data["longitude"]], { icon: markerCollecte }).bindPopup(popupInfo));
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

  routeTo(lat: any, lon: any) {
    console.log(lat);
    console.log(lon);
    console.log(this.lat);
    console.log(this.lon);
    console.log(this.routing);

    this.routing.setWaypoints([L.latLng(this.lat, this.lon), L.latLng(lat, lon)]);
    // control.spliceWaypoints(control.getWaypoints().length - 1, 1, e.latlng);
    // this.routing.setWaypoints([this.userCoord, coord]);
  }
}
