import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtyFactsComponent } from './arty-facts.component';

describe('ArtyFactsComponent', () => {
  let component: ArtyFactsComponent;
  let fixture: ComponentFixture<ArtyFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtyFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtyFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
