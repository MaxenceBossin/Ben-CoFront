import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-bennes',
  templateUrl: './filters-bennes.component.html',
  styleUrls: ['./filters-bennes.component.css']
})
export class FiltersBennesComponent implements OnInit {
  @Output() getFilterBenne = new EventEmitter<string>();
  @Output() getFilterType = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  filterMap(param: any) {
    this.getFilterBenne.emit(param);
  }

  filterType(param:any){
    console.log('fix filterType' , param);
    this.getFilterType.emit(param);
  }
}
