import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationDetailComponent } from './declaration-detail.component';

describe('DeclarationDetailComponent', () => {
  let component: DeclarationDetailComponent;
  let fixture: ComponentFixture<DeclarationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclarationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclarationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
