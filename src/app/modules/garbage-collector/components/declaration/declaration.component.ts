import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Support } from 'src/app/model/support';
import { UserService } from 'src/app/service/user/user.service';
import { SupportService } from 'src/app/service/support/support.service';
import { Router, ActivatedRoute } from "@angular/router";
import jwtDecode from "jwt-decode";
@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

  form: Support = {
    id: 0,
    dumpsterId: null,
    fkUserId: 0,
    category: '',
    content: '',
    title: ''
  }
  subscribeGb:any
  subscribeSupport:any
  garbageCollector:any
  idDumpster! : number
  idGb!: number

  constructor(private UserService: UserService, private SupportService: SupportService, private route: ActivatedRoute, 
    private router: Router) {

  }
  ngOnInit(): void {
    this.idDumpster = this.route.snapshot.params['id'] ? this.route.snapshot.params['id'] : null
    this.subscribeGb = this.UserService.getGarbageCollector().subscribe((users: any) =>  {
      
      console.log(this.garbageCollector)
      const jwt = this.getJwt(localStorage.getItem("jwtToken"))
      // @ts-ignore
      const email = jwt.email
      console.log(email);
      this.garbageCollector = users.filter((g:any) => g.email == email)
      this.idGb = this.garbageCollector[0].id

    }
    )
   
    
  }
  onSubmit(declarationForm: NgForm) {
    this.form.dumpsterId = this.idDumpster
    this.form.fkUserId = this.idGb
    this.form.category = declarationForm.value.category
    this.form.content = declarationForm.value.content
    this.form.title = declarationForm.value.title
    this.subscribeSupport = this.SupportService.add(this.form).subscribe({
      next: () => console.info('Envoie en cours'),
      error: (e) => console.error(e),
      complete: () => {
        console.info('register success'),
        this.router.navigate(['/']);
      }
    })
    
    console.log(this.form)
  }

  getJwt(jtwToken : any ) { 
    return jwtDecode(jtwToken);
  }
}