import { Component, OnDestroy, OnInit } from '@angular/core';
import { SupportService } from 'src/app/service/support/support.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-declaration-detail',
  templateUrl: './declaration-detail.component.html',
  styleUrls: ['./declaration-detail.component.css']
})
export class DeclarationDetailComponent implements OnInit, OnDestroy {
  subscribe : any
  subscribe2 : any
  /* id = this.route.snapshot.params.prenom; */
  id : number = 0;
  support : any
  constructor(private SupportService: SupportService,private route: ActivatedRoute, 
    private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.subscribe = this.SupportService.getOne(this.id).subscribe({
      error: (e) => this.router.navigate(['/admin/declaration']),
      next: (s:any) => {this.support = s
      console.log(this.support)
    },
    })  
  }
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe()
    this.subscribe2?.unsubscribe()
  }
  back(){
    this.router.navigate(['/admin/declaration'])
  }

  changeStatus(status: string){
    console.log(status);
    const sendData = { "status" : status}
    
    this.subscribe2 = this.SupportService.patchStatus(this.id, sendData).subscribe({
      error: (e) => console.log(e),
      next: () => this.back()
    })
  }

}
