import { ProfilGarbageCollectorComponent } from './components/profil-garbage-collector/profil-garbage-collector.component';
import { WayGarbageCollectorComponent } from './components/way-garbage-collector/way-garbage-collector.component';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { EboueurMessagesComponent } from './components/eboueur-messages/eboueur-messages.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    {
        path: 'messagerie',
        component: EboueurMessagesComponent
    },
    {
        path: 'declaration',
        component: DeclarationComponent
    },
    {
        path: 'declaration/:id',
        component: DeclarationComponent
    },
    {
        path: 'trajets',
        component: WayGarbageCollectorComponent
    },
    {
        path: 'profil',
        component: ProfilGarbageCollectorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GarbageCollectorRoutingModule { }