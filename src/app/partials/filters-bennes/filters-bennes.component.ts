import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-bennes',
  templateUrl: './filters-bennes.component.html',
  styleUrls: ['./filters-bennes.component.css']
})
export class FiltersBennesComponent implements OnInit {
  @Output() getFilterBenne = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  filterMap(param: any) {
    console.log('fix filter' , param);
    this.getFilterBenne.emit(param);
  }
}
