import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendGoogleMapsComponent } from './send-google-maps.component';

describe('SendGoogleMapsComponent', () => {
  let component: SendGoogleMapsComponent;
  let fixture: ComponentFixture<SendGoogleMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendGoogleMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
