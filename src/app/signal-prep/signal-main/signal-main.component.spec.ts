import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalMainComponent } from './signal-main.component';

describe('SignalMainComponent', () => {
  let component: SignalMainComponent;
  let fixture: ComponentFixture<SignalMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
