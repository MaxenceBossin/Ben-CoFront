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
  weekCount = new Date(this.previousMonday)
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



  constructor(private PlanningService: PlanningService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    //console.log('onInit');
    this.dateSend.date = this.datePipe.transform(this.previousMonday, 'YYYY-MM-dd')
    //console.log('requete= ',this.dateSend);
    this.weekCount = new Date(this.previousMonday)
    this.PlanningService.getPlanning(this.dateSend).subscribe((res: any) => {
      this.apiData = res
      //console.log('apiData=',this.apiData);
      
      
      
      
      this.resFormat()
    })
    
  }
  nextWeek() {
    this.datePipe.transform(this.previousMonday.setDate(this.previousMonday.getDate() + 7), 'dd')
    // this.weekCount = new Date(this.previousMonday)
    this.ngOnInit()
    // this.refreshData()
  }
  previousWeek() {
    this.datePipe.transform(this.previousMonday.setDate(this.previousMonday.getDate() - 7), 'dd')
    // this.weekCount = new Date(this.previousMonday)
    this.ngOnInit()
    // this.refreshData()
  }

  
  resFormat() {
    //console.log('resFormat',this.previousMonday);
    
    this.weekPlanning = []
    let lastMonday = new Date(this.previousMonday)
    for (let index = 0; index <= 5; index++) {
      this.datePipe.transform(this.previousMonday, 'YYYY-dd-MM')
      let dateString = { "date" : this.datePipe.transform(lastMonday, 'YYYY-MM-dd') ,"team" : []}
      //console.log(" datestring  is ",dateString);
      var getOccurrenceDate = this.apiData.filter((a:any) => a.date == dateString.date)
    //console.log("occurence date is ",getOccurrenceDate);
    let team = []
    // //console.log("fix 3",getOccurrenceDate)
    if (getOccurrenceDate[0]) {
      team = getOccurrenceDate[0].team.map((g:any) => g)
      
      // @ts-ignore
      dateString.team = team
    }
  
    
      
      //console.log("je push ",dateString);
      this.weekPlanning.push(dateString)  
      lastMonday.setDate(lastMonday.getDate() + 1)
      
      
    }
    // //console.log('fix', this.weekPlanning)
    this.refreshData()
  }
  refreshData() {
    //console.log('refreshData');
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
    //console.log('fix apres refresh', this.weekPlanning)
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
    console.log('fix avant envoi', this.weekPlanning)
  }

  sendData(){
    console.log('sendData ',this.weekPlanning);
    
    this.PlanningService.sendPlanning(this.weekPlanning).subscribe((res: any) => {
    
      console.log('res= ',res);
      
      
      
      
      // this.resFormat()
    })
  }

  private getPreviousMonday(date = new Date()) {
    // //console.log('getpreviousmonday =')

    const previousMonday = new Date();

    previousMonday.setDate(date.getDate() - ((date.getDay() + 6) % 7));
    // //console.log(previousMonday)
    return previousMonday;
  }
  
}
