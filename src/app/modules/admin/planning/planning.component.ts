import { Component, OnInit } from '@angular/core';

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
  constructor() {


  }
  ngOnInit(): void {
    console.log('test')

  }

}
