import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionOnPushComponent } from './change-detection-on-push.component';

describe('ChangeDetectionOnPushComponent', () => {
  let component: ChangeDetectionOnPushComponent;
  let fixture: ComponentFixture<ChangeDetectionOnPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionOnPushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectionOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
