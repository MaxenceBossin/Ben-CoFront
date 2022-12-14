
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarAdminComponent } from './nav-bar-admin/nav-bar-admin.component';
import { EboueurComponent } from './eboueur/eboueur.component';
import { TrajetComponent } from './trajet/trajet.component';
import { PlanningComponent } from './planning/planning.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DatePipe } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EboueurAddComponent } from './eboueur-add/eboueur-add.component';
import { EboueurEditComponent } from './eboueur-edit/eboueur-edit.component';

import { FormsModule } from '@angular/forms';
import { DeclarationDetailComponent } from './declaration-detail/declaration-detail.component';


@NgModule({
  declarations: [

    NavBarAdminComponent,
    EboueurComponent,
    TrajetComponent,
    PlanningComponent,
    DeclarationComponent,
    EboueurAddComponent,
    EboueurEditComponent,
    DeclarationDetailComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // BrowserAnimationsModule,
    DragDropModule,
    FormsModule

  ],
  providers: [DatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
