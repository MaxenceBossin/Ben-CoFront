import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { MentionsComponent } from './components/mentionsLegales/mentions.component';
import { FiltersBennesComponent } from './partials/filters-bennes/filters-bennes.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarPleineComponent } from './partials/navbar-pleine/navbar-pleine.component';
import { SearchBarLocationComponent } from './partials/search-bar-location/search-bar-location.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    MentionsComponent,
    NavbarPleineComponent,
    FiltersBennesComponent,
    SearchBarLocationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
