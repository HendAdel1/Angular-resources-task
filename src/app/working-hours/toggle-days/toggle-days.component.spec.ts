import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleDaysComponent } from './toggle-days.component';

describe('ToggleDaysComponent', () => {
  let component: ToggleDaysComponent;
  let fixture: ComponentFixture<ToggleDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleDaysComponent]
    });
    fixture = TestBed.createComponent(ToggleDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
