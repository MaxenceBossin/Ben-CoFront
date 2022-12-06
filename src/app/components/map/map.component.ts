import { DumpsterService } from 'src/app/service/dumpster/dumpster.service';
import { Component, AfterViewInit, Input, OnChanges } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { bindNodeCallback } from 'rxjs';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit, OnChanges {
  @Input() filterParam = ''; // decorate the property with @Input()
  @Input() filterParamType = ''; // decorate the property with @Input()

  public map: any;
  public lat = 43.60899203730793;
  public lon = 1.4338861683142448;
  public geolocationPosition: any;
  public tab: any = [];

  constructor(private DumpsterService: DumpsterService) { }

  ngOnChanges() {
    // changes.prop contains the old and the new value...
    if (this.map != undefined) {
      // console.log("fixMapppppppppp", this.filterParam);
      this.map.remove();
      this.initMap(this.lat, this.lon, this.filterParam, this.filterParamType);
    }

  }

  public initMap(lat: any, lon: any, filter: any, filterType: any): void {
    this.map = L.map('map', {
      // center: [43.60899203730793, 1.4338861683142448],
      center: [lat, lon],
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 2,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright%22%3EOpenStreetMap</a>',
      className: 'map-tiles'
    }).addTo(this.map);

    this.DumpsterService.getAllDumpsters().subscribe((data: any) => {
      data.forEach((value: any) => {
        switch (filter) {
          case -1:
            switch (filterType) {
              case "":
                this.addMarker(value);
                break;
              default:
                if (filterType == value["type"]) {
                  this.addMarker(value);
                }
                break;
            }
            break;
          default:
            switch (filterType) {
              case "":
                if (this.distance(lat, lon, value["latitude"], value["longitude"], "K") <= filter) {
                  this.addMarker(value);
                }
                break;
              default:
                if ((filterType == value["type"]) && (this.distance(lat, lon, value["latitude"], value["longitude"], "K") <= filter)) {
                  this.addMarker(value);
                }
                break;
            }
            break;
        }
      });
    })

    tiles.addTo(this.map);
  }


  placeSelected(event: any) {
    this.lat = event.properties.lat;
    this.lon = event.properties.lon;
    this.map.remove();
    this.initMap(this.lat, this.lon, -1, "");
  }

  ngAfterViewInit(): void {
    this.initMap(this.lat, this.lon, -1, "");
  }

  trajet() {
    this.DumpsterService.getAllDumpsters().subscribe((data: any) => {
      for (let index = 0; index < 81; index++) {
        this.tab.push(L.latLng(data[index]["latitude"], data[index]["longitude"]))
        if (index == 80) {
          L.Routing.control({
            router: L.Routing.osrmv1({
              language: "fr",
              profile: "car",
              
            }),
            waypoints: this.tab,
          }).addTo(this.map);
        }
        // this.tab.push(data[index]["latitude"], data[index]["longitude"]);
        // console.log(data[index]["latitude"]);
      }
    });
    console.log("fix", this.tab);



  }

  addMarker(value: any) {
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

    switch (value["type"]) {
      case "verre":
        L.marker([value["latitude"], value["longitude"]], { icon: markerVerre }).addTo(this.map).bindPopup("<h4 style='text-align:center;'>Benne à verre <br> Adresse: " + value["street_number"] + " " + value["street_label"] + ", " + value["city"] + " " + value["postal_code"]);
        break;
      case "textile":
        L.marker([value["latitude"], value["longitude"]], { icon: markerTextile }).addTo(this.map).bindPopup("<h4 style='text-align:center;'>Benne à verre <br> Adresse: " + value["street_number"] + " " + value["street_label"] + ", " + value["city"] + " " + value["postal_code"]);
        break;
      case "ordures ménagères":
        L.marker([value["latitude"], value["longitude"]], { icon: markerOrdures }).addTo(this.map).bindPopup("<h4 style='text-align:center;'>Benne à verre <br> Adresse: " + value["street_number"] + " " + value["street_label"] + ", " + value["city"] + " " + value["postal_code"]);
        break;
      case "collecte sélective":
        L.marker([value["latitude"], value["longitude"]], { icon: markerCollecte }).addTo(this.map).bindPopup("<h4 style='text-align:center;'>Benne à verre <br> Adresse: " + value["street_number"] + " " + value["street_label"] + ", " + value["city"] + " " + value["postal_code"]);
        break;
      default:
        console.log("No such type exists!");
        break;
    }
  }

  getGeolocation() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.geolocationPosition = position,
            this.lat = position.coords.latitude,
            this.lon = position.coords.longitude,
            this.map.remove(),
            this.initMap(this.lat, this.lon, -1, "");
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
}
