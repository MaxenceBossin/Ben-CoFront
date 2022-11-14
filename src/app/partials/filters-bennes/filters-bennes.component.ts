import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters-bennes',
  templateUrl: './filters-bennes.component.html',
  styleUrls: ['./filters-bennes.component.css']
})
export class FiltersBennesComponent implements OnInit {

  public filter = -1;

  constructor() {}

  ngOnInit(): void {
    // console.log(this.mapComponent.lat);
    // console.log(this.mapComponent.lon);
    // console.log(this.mapComponent.map);
  }

  Filter(filter: any) {
    // this.filter = filter;
    // this.mapComponent.getFilter(this.filter);
    // console.log(this.mapComponent.lat);
    // console.log(this.mapComponent.lon);
    // console.log(this.mapComponent.map);
    // this.mapComponent.map.remove();
    // this.mapComponent.initMap(this.mapComponent.lat, this.mapComponent.lon, filter);
  }
}
