import { Component } from '@angular/core';
import { WithPushComponent } from '../with-push/with-push.component';
import { WithOutPushComponent } from '../with-out-push/with-out-push.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-change-detection-on-push',
  standalone: true,
  imports: [WithPushComponent, WithOutPushComponent, JsonPipe],
  templateUrl: './change-detection-on-push.component.html',
  styleUrl: './change-detection-on-push.component.scss',
})
export class ChangeDetectionOnPushComponent {
  changeArray = [1, 2, 3, 4]

  addValueArray() {
    debugger
    let a = this.changeArray.length;
    this.changeArray.push(++a);
  }

  
}
