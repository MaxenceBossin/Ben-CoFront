import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersBennesComponent } from './filters-bennes.component';

describe('FiltersBennesComponent', () => {
  let component: FiltersBennesComponent;
  let fixture: ComponentFixture<FiltersBennesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersBennesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersBennesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
