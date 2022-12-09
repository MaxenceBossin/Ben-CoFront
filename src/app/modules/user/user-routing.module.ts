import { CarteComponent } from './components/carte/carte.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfilComponent } from 'src/app/modules/user/components/user-profil/user-profil.component';
import { UserAccueilComponent } from './user-accueil/user-accueil.component';


const routes: Routes = [
    {
        path: 'userAccueil',
        component: UserAccueilComponent
    },
    {
        path: 'profil',
        component: UserProfilComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }