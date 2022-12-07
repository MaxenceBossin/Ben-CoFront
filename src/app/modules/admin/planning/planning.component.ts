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



  constructor(private PlanningService: PlanningService, private datePipe: DatePipe) {
    // console.log('fix', this.getPreviousMonday());


    // this.datePipeString = datePipe.transform(this.previousMonday, 'yyyy-MM-dd');
    // console.log(this.datePipeString);
  }

  ngOnInit() {
    // let date = new Date()
    // console.log(this.datePipeString)
    // console.log(date)
    // this.dateSend.date = this.datePipeString
    // this.dateSend = this.dateSend.date
    this.resFormat()
    this.dateSend.date = this.datePipe.transform(this.previousMonday, 'YYYY-MM-dd')
    this.PlanningService.getPlanning(this.dateSend).subscribe((res: any) => {
      console.log(res)
    })
  }
  nextWeek() {
    this.datePipe.transform(this.previousMonday.setDate(this.previousMonday.getDate() + 7), 'dd')
    this.weekCount = new Date(this.previousMonday.getTime())
    console.log('next week = ')
    console.log(this.weekCount)

    // this.PlanningService.getPlanning(this.dateSend).subscribe((res: any) => {
    //   console.log(res)
    // })
    this.ngOnInit()
    this.refreshData()
  }
  previousWeek() {
    this.datePipe.transform(this.previousMonday.setDate(this.previousMonday.getDate() - 7), 'dd')
    // console.log(this.weekCount)
    console.log('previous week = ')
    console.log(this.previousMonday)
    this.weekCount = new Date(this.previousMonday.getTime())

    // this.PlanningService.getPlanning(this.dateSend).subscribe((res: any) => {
    //   console.log(res)
    // })
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
  resFormat() {
    this.weekPlanning = []
    let copyPreviousMonday = this.datePipe.transform(this.previousMonday, 'YYYY-dd-MM')
    for (let index = 0; index <= 4; index++) {
      // const obj = { "id": 5 }
      // console.log('fix b', copyPreviousMonday);
      console.log('fix', copyPreviousMonday);

      this.weekPlanning.push(copyPreviousMonday)
      //  console.log('fix a', this.weekPlanning);
      // copyPreviousMonday.setDate(copyPreviousMonday.getDate() + 1)
      // console.log('fix 3', copyPreviousMonday);

    }
    console.log('fix resFormat()=')
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
  //   constructor(private PlanningService: PlanningService) {
  //   }

  // }
  // ngOnInit()  {
  //   this.PlanningService.getPlanning().subscribe((users: any) => {
  //     this.listUsers = users
  //     this.garbageCollectors = users.filter((u: any) => {
  //       return u.roles.includes('ROLE_GARBAGE_COLLECTOR')
  //     })
  //   })
  // }
}
