import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { EboueurComponent } from './eboueur/eboueur.component';
import { TrajetComponent } from './trajet/trajet.component';
import { PlanningComponent } from './planning/planning.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { AdminRoutingModule } from './admin-routing.module';





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
    AdminRoutingModule,

  ]
})
export class AdminModule { }
