import { AuthComponent } from './modules/auth/auth.component';
import { MentionsComponent } from './modules/mentions/mentions.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
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
