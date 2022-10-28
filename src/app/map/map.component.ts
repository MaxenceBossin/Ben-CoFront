import { DumpsterService } from './../service/dumpster/dumpster.service';
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

  private map: any;
  private initMap(): void {
    this.map = L.map('map', {
      center: [43.60899203730793, 1.4338861683142448],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    var greenIcon = L.icon({
      iconUrl: './assets/images/marker.png',

      iconSize: [43, 78], // size of the icon
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([43.60899203730793, 1.4338861683142448], { icon: greenIcon }).addTo(this.map).bindPopup("Je suis une benne LaDen :D !!!");
    
    tiles.addTo(this.map);
  }

  constructor(private serviceDumpster: DumpsterService) { }

  ngOnInit(): void { 
    this.serviceDumpster.getAllDumpsters().subscribe(dumpster => {
      console.log('dumpster' , dumpster)
    })
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}