import { UserRoutingModule } from './user-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteComponent } from './components/carte/carte.component';
import { HeaderUserComponent } from './components/headerUser/header-user.component';
import { UserProfilComponent } from 'src/app/modules/user/components/user-profil/user-profil.component';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { UserAccueilComponent } from './user-accueil/user-accueil.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { FiltersBennesEboueursComponent } from 'src/app/partials/filters-bennes-eboueurs/filters-bennes-eboueurs.component';

@NgModule({
  declarations: [
    CarteComponent,
    HeaderUserComponent,
    UserProfilComponent,
    UserAccueilComponent,
    FiltersBennesEboueursComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('b5cbfb7341384fafa948d56b4da4899c'),
    LeafletModule,
    LeafletMarkerClusterModule
  ]
})
export class UserModule { }
