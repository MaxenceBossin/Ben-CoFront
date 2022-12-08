import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { MentionsComponent } from './components/mentionsLegales/mentions.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarPleineComponent } from './partials/navbar-pleine/navbar-pleine.component';
import { FormLoginComponent } from './components/auth/form-login/form-login.component';
import { FormRegisterComponent } from './components/auth/form-register/form-register.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccueilComponent } from './components/home/accueil/accueil.component';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './components/map/map.component';
import { UserAccueilComponent } from './modules/user/user-accueil/user-accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    MentionsComponent,
    NavbarPleineComponent,
    FormLoginComponent,
    FormRegisterComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LeafletModule,
    LeafletMarkerClusterModule,
    FormsModule
  ],
  exports:[
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
