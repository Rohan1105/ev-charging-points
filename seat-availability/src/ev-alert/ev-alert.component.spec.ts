import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvAlertComponent } from './ev-alert.component';

describe('SeatAlertComponent', () => {
  let component: EvAlertComponent;
  let fixture: ComponentFixture<EvAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvAlertComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
