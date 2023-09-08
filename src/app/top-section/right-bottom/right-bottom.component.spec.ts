import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightBottomComponent } from './right-bottom.component';

describe('RightBottomComponent', () => {
  let component: RightBottomComponent;
  let fixture: ComponentFixture<RightBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightBottomComponent]
    });
    fixture = TestBed.createComponent(RightBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
