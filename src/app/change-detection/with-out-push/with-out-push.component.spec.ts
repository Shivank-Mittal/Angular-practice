import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOutPushComponent } from './with-out-push.component';

describe('WithOutPushComponent', () => {
  let component: WithOutPushComponent;
  let fixture: ComponentFixture<WithOutPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithOutPushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithOutPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
