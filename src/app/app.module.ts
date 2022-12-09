import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { MentionsComponent } from './components/mentionsLegales/mentions.component';
import { HeaderComponent } from './components/header/header.component';
import { FormLoginComponent } from './components/auth/form-login/form-login.component';
import { FormRegisterComponent } from './components/auth/form-register/form-register.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './components/home/accueil/accueil.component';
import { FiltersBennesEboueursComponent } from './partials/filters-bennes-eboueurs/filters-bennes-eboueurs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    MentionsComponent,
    FormLoginComponent,
    FormRegisterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports:[
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
