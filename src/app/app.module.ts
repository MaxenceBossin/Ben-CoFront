import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { MentionsComponent } from './components/mentionsLegales/mentions.component';
import { FiltersBennesComponent } from './partials/filters-bennes/filters-bennes.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarPleineComponent } from './partials/navbar-pleine/navbar-pleine.component';
import { EboueurMessagesComponent } from './modules/garbage-collector/components/eboueur-messages/eboueur-messages.component';
import { FormLoginComponent } from './components/auth/form-login/form-login.component';
import { FormRegisterComponent } from './components/auth/form-register/form-register.component';
import { FormGroup, FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { DeclarationComponent } from './modules/garbage-collector/components/declaration/declaration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AccueilComponent } from './components/home/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    MentionsComponent,
    NavbarPleineComponent,
    FiltersBennesComponent,
    EboueurMessagesComponent,
    FormLoginComponent,
    FormRegisterComponent,
    DeclarationComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
