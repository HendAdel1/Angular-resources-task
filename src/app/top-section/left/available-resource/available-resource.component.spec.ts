import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableResourceComponent } from './available-resource.component';

describe('AvailableResourceComponent', () => {
  let component: AvailableResourceComponent;
  let fixture: ComponentFixture<AvailableResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvailableResourceComponent]
    });
    fixture = TestBed.createComponent(AvailableResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
