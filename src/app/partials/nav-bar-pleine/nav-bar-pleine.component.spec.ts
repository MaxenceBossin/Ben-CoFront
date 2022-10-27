import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarPleineComponent } from './nav-bar-pleine.component';

describe('NavBarPleineComponent', () => {
  let component: NavBarPleineComponent;
  let fixture: ComponentFixture<NavBarPleineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarPleineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarPleineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
