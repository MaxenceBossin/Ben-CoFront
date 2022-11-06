import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { EboueurComponent } from './eboueur/eboueur.component';
import { TrajetComponent } from './trajet/trajet.component';
import { PlanningComponent } from './planning/planning.component';
import { DeclarationComponent } from './declaration/declaration.component';

const routes: Routes = [
  { path: 'planning', component: PlanningComponent }
];

@NgModule({
  declarations: [

    NavBarAdminComponent,
    EboueurComponent,
    TrajetComponent,
    PlanningComponent,
    DeclarationComponent
  ],
  imports: [
    CommonModule,

  ]
})
export class AdminModule { }
