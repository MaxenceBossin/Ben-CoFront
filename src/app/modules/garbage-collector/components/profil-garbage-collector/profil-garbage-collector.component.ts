import { Component, OnInit } from '@angular/core';

import { PlanningService } from 'src/app/service/planning/planning.service';
import { UserService } from 'src/app/service/user/user.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-profil-garbage-collector',
  templateUrl: './profil-garbage-collector.component.html',
  styleUrls: ['./profil-garbage-collector.component.css']
})
export class ProfilGarbageCollectorComponent implements OnInit {


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
  garbageCollectorList: any
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



  constructor(private PlanningService: PlanningService, private datePipe: DatePipe, private UserService: UserService) {
  }




  ngOnInit() {
    this.callGarbageCollector()

    this.refreshApi()

    this.resFormat()
  }
  callGarbageCollector() {
    this.UserService.getGarbageCollector().subscribe((res: any) => {
      this.garbageCollectorList = res.map((r: any) => r.first_name + ' ' + r.last_name)
    })
  }

  refreshApi() {

    this.dateSend.date = this.datePipe.transform(this.previousMonday, 'YYYY-MM-dd')

    this.weekCount = new Date(this.previousMonday)
    this.PlanningService.getPlanning(this.dateSend).subscribe((res: any) => {
      this.apiData = res





      this.resFormat()
    })
  }

  nextWeek() {
    this.datePipe.transform(this.previousMonday.setDate(this.previousMonday.getDate() + 7), 'dd')

    this.refreshApi()

  }
  previousWeek() {
    this.datePipe.transform(this.previousMonday.setDate(this.previousMonday.getDate() - 7), 'dd')

    this.refreshApi()

  }


  resFormat() {


    this.weekPlanning = []
    let lastMonday = new Date(this.previousMonday)
    for (let index = 0; index <= 5; index++) {
      this.datePipe.transform(this.previousMonday, 'YYYY-dd-MM')
      let dateString = { "date": this.datePipe.transform(lastMonday, 'YYYY-MM-dd'), "team": [] }

      var getOccurrenceDate = this.apiData.filter((a: any) => a.date == dateString.date)

      let team = []

      if (getOccurrenceDate[0]) {
        team = getOccurrenceDate[0].team.map((g: any) => g)

        // @ts-ignore
        dateString.team = team
      }




      this.weekPlanning.push(dateString)
      lastMonday.setDate(lastMonday.getDate() + 1)


    }

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


  private getPreviousMonday(date = new Date()) {


    const previousMonday = new Date();

    previousMonday.setDate(date.getDate() - ((date.getDay() + 6) % 7));

    return previousMonday;
  }

}
