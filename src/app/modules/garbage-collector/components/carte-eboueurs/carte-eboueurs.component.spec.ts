import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteEboueursComponent } from './carte-eboueurs.component';

describe('CarteEboueursComponent', () => {
  let component: CarteEboueursComponent;
  let fixture: ComponentFixture<CarteEboueursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteEboueursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteEboueursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
