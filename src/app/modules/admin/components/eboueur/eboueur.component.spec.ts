import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EboueurComponent } from './eboueur.component';

describe('EboueurComponent', () => {
  let component: EboueurComponent;
  let fixture: ComponentFixture<EboueurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EboueurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EboueurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
