import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayGarbageCollectorComponent } from './way-garbage-collector.component';

describe('WayGarbageCollectorComponent', () => {
  let component: WayGarbageCollectorComponent;
  let fixture: ComponentFixture<WayGarbageCollectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayGarbageCollectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WayGarbageCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
