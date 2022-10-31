import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationMakerComponent } from './declaration-maker.component';

describe('DeclarationMakerComponent', () => {
  let component: DeclarationMakerComponent;
  let fixture: ComponentFixture<DeclarationMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationMakerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
