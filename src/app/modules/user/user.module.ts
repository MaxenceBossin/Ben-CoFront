import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from './components/carte/carte.component';



@NgModule({
  declarations: [
    CarteComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
