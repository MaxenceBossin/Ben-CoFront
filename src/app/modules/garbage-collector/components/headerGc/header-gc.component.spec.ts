import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGcComponent } from './header-gc.component';

describe('HeaderGcComponent', () => {
  let component: HeaderGcComponent;
  let fixture: ComponentFixture<HeaderGcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
