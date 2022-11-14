import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    DeclarationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class GarbageCollectorModule { }
