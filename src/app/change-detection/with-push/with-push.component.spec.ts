import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithPushComponent } from './with-push.component';

describe('WithPushComponent', () => {
  let component: WithPushComponent;
  let fixture: ComponentFixture<WithPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WithPushComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WithPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
