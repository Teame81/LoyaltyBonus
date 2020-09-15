import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConsultatComponent } from './edit-consultat.component';

describe('EditConsultatComponent', () => {
  let component: EditConsultatComponent;
  let fixture: ComponentFixture<EditConsultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditConsultatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConsultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
