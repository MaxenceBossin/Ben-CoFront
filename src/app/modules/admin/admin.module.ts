import { DeclarationComponent } from './components/declaration/declaration.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './components/planning/planning.component';
import { NavBarAdminComponent } from './components/nav-bar-admin/nav-bar-admin.component';
import { TrajetComponent } from './components/trajet/trajet.component';
import { EboueurComponent } from './components/eboueur/eboueur.component';



const routes: Routes = [
  { path: 'planning', component: PlanningComponent },
  { path: 'declaration', component: DeclarationComponent },
  { path: 'trajet', component: TrajetComponent },
  { path: 'eboueur', component: EboueurComponent },
]

@NgModule({
  declarations: [

    PlanningComponent,
    NavBarAdminComponent,
    TrajetComponent,
    EboueurComponent,
    DeclarationComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,

  ]
})

export class AdminModule { }
