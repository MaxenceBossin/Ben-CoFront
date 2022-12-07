import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { MapComponent } from './../../components/map/map.component';
import { GarbageCollectorRoutingModule } from './garbage-collector-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { WayGarbageCollectorComponent } from './components/way-garbage-collector/way-garbage-collector.component';
import { ProfilGarbageCollectorComponent } from './components/profil-garbage-collector/profil-garbage-collector.component';


@NgModule({
  declarations: [
    WayGarbageCollectorComponent,
    ProfilGarbageCollectorComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    GarbageCollectorRoutingModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('b5cbfb7341384fafa948d56b4da4899c'),
  ]
})
export class GarbageCollectorModule { }
