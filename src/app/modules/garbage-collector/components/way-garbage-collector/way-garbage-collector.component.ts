import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-way-garbage-collector',
  templateUrl: './way-garbage-collector.component.html',
  styleUrls: ['./way-garbage-collector.component.css']
})
export class WayGarbageCollectorComponent implements OnInit {
  currentFilter = -1;
  currentFilterType = "";

  constructor() { }

  ngOnInit(): void {
  }

  getFilter(param: any) {
    this.currentFilter = param;
  }

  getFilterType(param: any) {
    console.log('fix paramType', param);
    this.currentFilterType = param;
    console.log('fix currentFilterType', this.currentFilterType);
  }
}
