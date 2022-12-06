import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EboueurAddComponent } from './eboueur-add.component';

describe('EboueurAddComponent', () => {
  let component: EboueurAddComponent;
  let fixture: ComponentFixture<EboueurAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EboueurAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EboueurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
