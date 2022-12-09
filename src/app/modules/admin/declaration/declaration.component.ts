import { Component, OnDestroy, OnInit } from '@angular/core';
import { SupportService } from 'src/app/service/support/support.service';
import { Router } from "@angular/router"
@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit, OnDestroy{
  subscribe: any
  supports: any
  supportsFilter: any
  constructor(private SupportService: SupportService, private router: Router) { }

  ngOnInit(): void {
    this.subscribe = this.SupportService.getAll().subscribe((s: any) =>  {
      this.supports = s
      this.supportsFilter = s
    })
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe()
  }

  redirectToDetail(id:number){
    this.router.navigate(['/admin/declaration/modifier/' + id])
  }

  filter(status : string){
    if(status == ''){
      this.supportsFilter = this.supports
    }else{
      console.log(2);
      this.supportsFilter = this.supports.filter((s:any) => s.status == status)      
    }
    
  }

}
