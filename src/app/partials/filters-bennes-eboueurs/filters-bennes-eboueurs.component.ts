import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters-bennes-eboueurs',
  templateUrl: './filters-bennes-eboueurs.component.html',
  styleUrls: ['./filters-bennes-eboueurs.component.css']
})
export class FiltersBennesEboueursComponent implements OnInit {
  @Output() getFilterBenne = new EventEmitter<string>();
  @Output() getFilterType = new EventEmitter<string>();

  isFilterTypeVerre: boolean = false;
  isFilterTypeTextile: boolean = false;
  isFilterTypeOrdures: boolean = false;
  isFilterTypeCollecte: boolean = false;

  isFilter250: boolean = false;
  isFilter500: boolean = false;
  isFilter750: boolean = false;
  isFilter1000: boolean = false;

  filterValue: number = -1;
  filterTypeValue: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  isFilterTypeActivated(type: any) {
    switch (type) {
      case "verre":
        this.isFilterTypeTextile = false;
        this.isFilterTypeOrdures = false;
        this.isFilterTypeCollecte = false;
        if (this.isFilterTypeVerre == true) {
          this.isFilterTypeVerre = false;
        } else {
          this.isFilterTypeVerre = true;
        }
        break;
      case "textile":
        this.isFilterTypeVerre = false;
        this.isFilterTypeOrdures = false;
        this.isFilterTypeCollecte = false;
        if (this.isFilterTypeTextile == true) {
          this.isFilterTypeTextile = false;
        } else {
          this.isFilterTypeTextile = true;
        }
        break;
      case "ordures":
        this.isFilterTypeVerre = false;
        this.isFilterTypeTextile = false;
        this.isFilterTypeCollecte = false;
        if (this.isFilterTypeOrdures == true) {
          this.isFilterTypeOrdures = false;
        } else {
          this.isFilterTypeOrdures = true;
        }
        break;
      case "collecte":
        this.isFilterTypeVerre = false;
        this.isFilterTypeTextile = false;
        this.isFilterTypeOrdures = false;
        if (this.isFilterTypeCollecte == true) {
          this.isFilterTypeCollecte = false;
        } else {
          this.isFilterTypeCollecte = true;
        }
        break;
      default:
        break;
    }
  }

  isFilterDistanceActivated(type: any) {
    switch (type) {
      case 0.25:
        this.isFilter500 = false;
        this.isFilter750 = false;
        this.isFilter1000 = false;
        if (this.isFilter250 == true) {
          this.isFilter250 = false;
        } else {
          this.isFilter250 = true;
        }
        break;
      case 0.5:
        this.isFilter250 = false;
        this.isFilter750 = false;
        this.isFilter1000 = false;
        if (this.isFilter500 == true) {
          this.isFilter500 = false;
        } else {
          this.isFilter500 = true;
        }
        break;
      case 0.75:
        this.isFilter250 = false;
        this.isFilter500 = false;
        this.isFilter1000 = false;
        if (this.isFilter750 == true) {
          this.isFilter750 = false;
        } else {
          this.isFilter750 = true;
        }
        break;
      case 1:
        this.isFilter250 = false;
        this.isFilter500 = false;
        this.isFilter750 = false;
        if (this.isFilter1000 == true) {
          this.isFilter1000 = false;
        } else {
          this.isFilter1000 = true;
        }
        break;
      default:
        break;
    }
  }

  filterMap(param: any) {
    if (this.filterValue == param) {
      param = -1;
    }
    this.filterValue = param;
    this.getFilterBenne.emit(param);
  }

  filterType(param: any) {
    if (this.filterTypeValue == param) {
      param = "";
    }
    this.filterTypeValue = param;
    this.getFilterType.emit(param);
  }
}
