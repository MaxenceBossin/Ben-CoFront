import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilGarbageCollectorComponent } from './profil-garbage-collector.component';

describe('ProfilGarbageCollectorComponent', () => {
  let component: ProfilGarbageCollectorComponent;
  let fixture: ComponentFixture<ProfilGarbageCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilGarbageCollectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilGarbageCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
