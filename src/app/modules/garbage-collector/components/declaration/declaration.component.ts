import { DeclarationService } from './../../../../service/declaration/declaration.service';
import { Component, OnInit } from '@angular/core';
import { Declaration } from '../../model/declaration';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-declaration',
  templateUrl: './declaration.component.html',
  styleUrls: ['./declaration.component.css']
})
export class DeclarationComponent implements OnInit {

  form: Declaration = {
    id: null,
    dumpster_id_id: 0,
    fk_user_id_id: 0,
    fk_admin_id_id: 0,
    category: '',
    image_src: '',
    content: '',
    title: ''
  }
  
  constructor(private declarationS: DeclarationService) { }

  ngOnInit(): void {
  }
  onSubmit(declarationForm: NgForm) {
    console.log("is submit");

    this.form.id = declarationForm.value.id
    this.form.dumpster_id_id = declarationForm.value.dumpster_id_id
    this.form.fk_user_id_id = declarationForm.value.fk_user_id_id
    this.form.fk_admin_id_id = declarationForm.value.fk_admin_id_id
    this.form.category = declarationForm.value.category
    this.form.image_src = declarationForm.value.image_src
    this.form.content = declarationForm.value.content
    this.form.title = declarationForm.value.title

    var test = new Declaration(this.form.id, 2, 1, 2, "gregreg", this.form.image_src, this.form.content, this.form.title)
    console.log(test);
    
    console.log(this.form.category);
    console.log(this.form.content);
    console.log(this.form.image_src);
    console.log(this.form.title);
    this.declarationS.postDeclaration(test);
  }
}