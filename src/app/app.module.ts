import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/PageAccueil/header/header.component';
import { HomeComponent } from './components/PageAccueil/home/home.component';
import { AuthComponent } from './components/PageAccueil/auth/auth.component';
import { MentionsComponent } from './components/PageAccueil/mentionsLegales/mentions.component';
import { MapComponent } from './partials/map/map.component';
import { NavBarPleineComponent } from './partials/nav-bar-pleine/nav-bar-pleine.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    MentionsComponent,
    MapComponent,
    NavBarPleineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
