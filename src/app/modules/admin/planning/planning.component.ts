import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  week = [
    {
      name: 'lundi',
      int: '05'
    },
    {
      name: 'mardi',
      int: '06'
    },
    {
      name: 'mercredi',
      int: '07'
    },
    {
      name: 'jeudi',
      int: '08'
    },
    {
      name: 'vendredi',
      int: '09'
    },
    {
      name: 'samedi',
      int: '10'
    },
  ]
  daysdata = [
    ['Houda', 'jody'], ['Hugo'], ['Antoine'], ['Maxence'], [], [],
  ];
  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  constructor() {


  }
  ngOnInit(): void {
    console.log('test')

  }

}
