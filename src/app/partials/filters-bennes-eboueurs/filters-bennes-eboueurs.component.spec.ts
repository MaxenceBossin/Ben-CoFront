import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersBennesEboueursComponent } from './filters-bennes-eboueurs.component';

describe('FiltersBennesEboueursComponent', () => {
  let component: FiltersBennesEboueursComponent;
  let fixture: ComponentFixture<FiltersBennesEboueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltersBennesEboueursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltersBennesEboueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
