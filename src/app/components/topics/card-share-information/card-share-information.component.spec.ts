import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShareInformationComponent } from './card-share-information.component';

describe('CardShareInformationComponent', () => {
  let component: CardShareInformationComponent;
  let fixture: ComponentFixture<CardShareInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardShareInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardShareInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
