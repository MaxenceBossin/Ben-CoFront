import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';

import { HttpClientModule } from '@angular/common/http';

import { MentionsComponent } from './components/mentionsLegales/mentions.component';
import { FiltersBennesComponent } from './partials/filters-bennes/filters-bennes.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarPleineComponent } from './partials/navbar-pleine/navbar-pleine.component';
import { MapComponent } from './components/map/map.component';
import { EboueurMessagesComponent } from './modules/garbage-collector/components/eboueur-messages/eboueur-messages.component';
import { FormLoginComponent } from './components/auth/form-login/form-login.component';
import { FormRegisterComponent } from './components/auth/form-register/form-register.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Declaration } from './modules/garbage-collector/model/declaration';
import { DeclarationComponent } from './modules/garbage-collector/components/declaration/declaration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    MentionsComponent,
    NavbarPleineComponent,
    FiltersBennesComponent,
    MapComponent,
    EboueurMessagesComponent,
    FormLoginComponent,
    FormRegisterComponent,
    DeclarationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('b5cbfb7341384fafa948d56b4da4899c'),
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule

  ],
  providers: [    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
