import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { PlanningService } from 'src/app/service/planning/planning.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  datePipeString: any
  dateSend: any = {
    "date": ''
  }
  previousMonday = this.getPreviousMonday()
  weekCount = this.getPreviousMonday()
  weekNumber = this.datePipe.transform(this.previousMonday, 'w')
  year = this.datePipe.transform(this.previousMonday, 'YYYY')
  weekPlanning: any = []
  apiData: any
  week = [
    {
      name: 'lundi',
      int: this.datePipe.transform(this.weekCount, 'dd-MM')

    },
    {
      name: 'mardi',
      int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
    },
    {
      name: 'mercredi',
      int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
    },
    {
      name: 'jeudi',
      int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
    },
    {
      name: 'vendredi',
      int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
    },
    {
      name: 'samedi',
      int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
    },
  ]
  // todo teamjon from api et a inserer dans refreshData()
  daysdata = [
    ['Houda', 'jody'], ['Hugo'], ['Antoine'], ['Maxence'], [], [],
  ];


  constructor(private PlanningService: PlanningService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.dateSend.date = this.datePipe.transform(this.previousMonday, 'YYYY-MM-dd')
    this.PlanningService.getPlanning(this.dateSend).subscribe((res: any) => {
      this.apiData = res
      this.resFormat()
    })
  }
  nextWeek() {
    this.datePipe.transform(this.previousMonday.setDate(this.previousMonday.getDate() + 7), 'dd')
    this.weekCount = new Date(this.previousMonday.getTime())
    this.ngOnInit()
    this.refreshData()
  }
  previousWeek() {
    this.datePipe.transform(this.previousMonday.setDate(this.previousMonday.getDate() - 7), 'dd')
    this.weekCount = new Date(this.previousMonday.getTime())
    this.ngOnInit()
    this.refreshData()
  }
  refreshData() {
    this.year = this.datePipe.transform(this.previousMonday, 'YYYY')
    this.weekNumber = this.datePipe.transform(this.previousMonday, 'w')
    this.week = [
      {
        name: 'lundi',
        int: this.datePipe.transform(this.weekCount, 'dd-MM'),

      },
      {
        name: 'mardi',
        int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
      },
      {
        name: 'mercredi',
        int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
      },
      {
        name: 'jeudi',
        int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
      },
      {
        name: 'vendredi',
        int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
      },
      {
        name: 'samedi',
        int: this.datePipe.transform(this.weekCount.setDate(this.weekCount.getDate() + 1), 'dd-MM')
      },
    ]
  }
  
  resFormat() {
    this.weekPlanning = []
    let lastMonday = this.getPreviousMonday()
    for (let index = 0; index <= 5; index++) {
      this.datePipe.transform(this.previousMonday, 'YYYY-dd-MM')
      let dateString = { "date" : this.datePipe.transform(lastMonday, 'YYYY-MM-dd') ,"team" : []}

    const getOccurrenceDate = this.apiData.filter((a:any) => a.date == dateString.date)
    const teamTemp = getOccurrenceDate.map((g:any) => g.team)
    let team = []
    if (teamTemp[0]) {
      for (let index = 0; index < teamTemp[0].length; index++) {
        team.push( teamTemp[0][index].name)       
      }
      // @ts-ignore
      dateString.team = team
    }
    
    
      
      
      this.weekPlanning.push(dateString)  
      lastMonday.setDate(lastMonday.getDate() + 1)
    }
    console.log('fix', this.weekPlanning)
  }
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

  private getPreviousMonday(date = new Date()) {
    console.log('getpreviousmonday =')

    const previousMonday = new Date();

    previousMonday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    console.log(previousMonday)
    return previousMonday;
  }
  
}
