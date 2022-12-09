import { LeafletMarkerClusterModule } from '@asymmetrik/ngx-leaflet-markercluster';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { GarbageCollectorRoutingModule } from './garbage-collector-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WayGarbageCollectorComponent } from './components/way-garbage-collector/way-garbage-collector.component';
import { ProfilGarbageCollectorComponent } from './components/profil-garbage-collector/profil-garbage-collector.component';
import { HeaderGcComponent } from './components/headerGc/header-gc.component';
import { EboueurMessagesComponent } from './components/eboueur-messages/eboueur-messages.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeclarationComponent } from './components/declaration/declaration.component';
import { FiltersBennesComponent } from 'src/app/partials/filters-bennes/filters-bennes.component';
import { CarteEboueursComponent } from './components/carte-eboueurs/carte-eboueurs.component';
import { DatePipe } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    WayGarbageCollectorComponent,
    ProfilGarbageCollectorComponent,
    HeaderGcComponent,
    EboueurMessagesComponent,
    DeclarationComponent,
    FiltersBennesComponent,
    CarteEboueursComponent
    ],
    
  imports: [
    CommonModule,
    FormsModule,
    GarbageCollectorRoutingModule,
    GeoapifyGeocoderAutocompleteModule.withConfig('b5cbfb7341384fafa948d56b4da4899c'),
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    LeafletModule,
    LeafletMarkerClusterModule
    ],
  exports:[
    DragDropModule,
    DatePipe,
  ],
  providers: [DatePipe],

})
export class GarbageCollectorModule { }
