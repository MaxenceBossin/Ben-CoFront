import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from './components/carte/carte.component';
import { HeaderUserComponent } from './components/headerUser/header-user.component';
import { UserProfilComponent } from 'src/app/modules/user/components/user-profil/user-profil.component';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { FiltersBennesComponent } from 'src/app/partials/filters-bennes/filters-bennes.component';
import { UserAccueilComponent } from './user-accueil/user-accueil.component';



@NgModule({
  declarations: [
    CarteComponent,
    HeaderUserComponent,
    UserProfilComponent,
    FiltersBennesComponent,
    UserAccueilComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('b5cbfb7341384fafa948d56b4da4899c'),
  ]
})
export class UserModule { }
