import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeEventsComponent } from './card-type-events.component';

describe('CardTypeEventsComponent', () => {
  let component: CardTypeEventsComponent;
  let fixture: ComponentFixture<CardTypeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypeEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTypeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
