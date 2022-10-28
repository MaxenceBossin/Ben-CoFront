import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { MentionsComponent } from './components/mentionsLegales/mentions.component';
import { MapComponent } from './partials/map/map.component';
import { FiltersBennesComponent } from './partials/filters-bennes/filters-bennes.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarPleineComponent } from './partials/navbar-pleine/navbar-pleine.component';
import { SearchBarLocationComponent } from './partials/search-bar-location/search-bar-location.component';
import { SigninComponent } from './components/auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    MentionsComponent,
    MapComponent,
    NavbarPleineComponent,
    FiltersBennesComponent,
    SearchBarLocationComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
