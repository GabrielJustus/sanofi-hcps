import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardELearningComponent } from './card-e-learning.component';

describe('CardELearningComponent', () => {
  let component: CardELearningComponent;
  let fixture: ComponentFixture<CardELearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardELearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardELearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
