import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiReservationComponent } from './multi-reservation.component';

describe('MultiReservationComponent', () => {
  let component: MultiReservationComponent;
  let fixture: ComponentFixture<MultiReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiReservationComponent]
    });
    fixture = TestBed.createComponent(MultiReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
