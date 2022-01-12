import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDigitalEventComponent } from './card-digital-event.component';

describe('CardDigitalEventComponent', () => {
  let component: CardDigitalEventComponent;
  let fixture: ComponentFixture<CardDigitalEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDigitalEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDigitalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
