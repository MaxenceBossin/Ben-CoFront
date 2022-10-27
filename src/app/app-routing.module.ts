import { AuthComponent } from './components/PageAccueil/auth/auth.component';
import { MentionsComponent } from './components/PageAccueil/mentionsLegales/mentions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/PageAccueil/home/home.component';

const routes: Routes = [
  {
    path: 'utilisateur',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'travailleur',
    loadChildren: () => import('./modules/garbage-collector/garbage-collector.module').then(m => m.GarbageCollectorModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },


  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mention-legal', component: MentionsComponent },
  { path: 'connexion', component: AuthComponent },
  { path: 'inscription', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
