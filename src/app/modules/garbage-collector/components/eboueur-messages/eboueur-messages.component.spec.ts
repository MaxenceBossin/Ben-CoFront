import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EboueurMessagesComponent } from './eboueur-messages.component';

describe('EboueurMessagesComponent', () => {
  let component: EboueurMessagesComponent;
  let fixture: ComponentFixture<EboueurMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EboueurMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EboueurMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
