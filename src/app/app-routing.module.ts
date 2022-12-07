import { AuthComponent } from './components/auth/auth.component';
import { MentionsComponent } from './components/mentionsLegales/mentions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EboueurMessagesComponent } from './modules/garbage-collector/components/eboueur-messages/eboueur-messages.component';
import { UserGuard } from './guard/user.guard';
import { GarbageCollectorGuard } from './guard/garbage-collector.guard';
import { AdminGuard } from './guard/admin.guard';

const routes: Routes = [
  {
    path: 'utilisateur',
    loadChildren: () => import('./modules/user/user.module')
    .then(m => m.UserModule),
    canActivate:[UserGuard]
  },
  {
    path: 'eboueurs',
    loadChildren: () => import('./modules/garbage-collector/garbage-collector.module')
    .then(m => m.GarbageCollectorModule),
    canActivate:[GarbageCollectorGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
    .then(m => m.AdminModule),
    canActivate:[AdminGuard]
  },

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mention-legal', component: MentionsComponent },
  { path: 'connexion', component: AuthComponent },
  { path: 'inscription', component: AuthComponent },
  { path: 'eboueur-messages', component: EboueurMessagesComponent },
  { path: '**', redirectTo: 'home' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }