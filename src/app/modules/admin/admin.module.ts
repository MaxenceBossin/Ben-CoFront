
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { EboueurComponent } from './eboueur/eboueur.component';
import { TrajetComponent } from './trajet/trajet.component';
import { PlanningComponent } from './planning/planning.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { AdminRoutingModule } from './admin-routing.module';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';




@NgModule({
  declarations: [

    NavBarAdminComponent,
    EboueurComponent,
    TrajetComponent,
    PlanningComponent,
    DeclarationComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // BrowserAnimationsModule,
    DragDropModule

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
