import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateBonusComponent } from './calculate-bonus.component';

describe('CalculateBonusComponent', () => {
  let component: CalculateBonusComponent;
  let fixture: ComponentFixture<CalculateBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
