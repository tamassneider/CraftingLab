import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoupageComponent } from './decoupage.component';

describe('DecoupageComponent', () => {
  let component: DecoupageComponent;
  let fixture: ComponentFixture<DecoupageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecoupageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecoupageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
