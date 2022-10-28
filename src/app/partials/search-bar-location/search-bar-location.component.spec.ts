import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarLocationComponent } from './search-bar-location.component';

describe('SearchBarLocationComponent', () => {
  let component: SearchBarLocationComponent;
  let fixture: ComponentFixture<SearchBarLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBarLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
