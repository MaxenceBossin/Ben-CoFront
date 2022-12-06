import { GarbageCollectorRoutingModule } from './garbage-collector-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { WayGarbageCollectorComponent } from './components/way-garbage-collector/way-garbage-collector.component';
import { ProfilGarbageCollectorComponent } from './components/profil-garbage-collector/profil-garbage-collector.component';


@NgModule({
  declarations: [
  
    WayGarbageCollectorComponent,
       ProfilGarbageCollectorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    GarbageCollectorRoutingModule
  ]
})
export class GarbageCollectorModule { }
