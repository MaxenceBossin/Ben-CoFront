import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPleineComponent } from './navbar-pleine.component';

describe('NavbarPleineComponent', () => {
  let component: NavbarPleineComponent;
  let fixture: ComponentFixture<NavbarPleineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPleineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarPleineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
