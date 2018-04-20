import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMakingComponent } from './card-making.component';

describe('CardMakingComponent', () => {
  let component: CardMakingComponent;
  let fixture: ComponentFixture<CardMakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
