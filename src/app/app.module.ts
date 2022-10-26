import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { MentionsComponent } from './components/mentions/mentions.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    MentionsComponent,
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
