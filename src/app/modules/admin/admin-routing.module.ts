import { DeclarationComponent } from './declaration/declaration.component';
import { EboueurComponent } from './eboueur/eboueur.component';
import { TrajetComponent } from './trajet/trajet.component';
import { PlanningComponent } from './planning/planning.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {
        path: 'planning',
        component: PlanningComponent
    },
    {
        path: 'declaration',
        component: DeclarationComponent
    },
    {
        path: 'eboueurs',
        component: EboueurComponent
    },
    {
        path: 'trajet',
        component: TrajetComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }