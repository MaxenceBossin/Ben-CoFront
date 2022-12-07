import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EboueurEditComponent } from './eboueur-edit.component';

describe('EboueurEditComponent', () => {
  let component: EboueurEditComponent;
  let fixture: ComponentFixture<EboueurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EboueurEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EboueurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
