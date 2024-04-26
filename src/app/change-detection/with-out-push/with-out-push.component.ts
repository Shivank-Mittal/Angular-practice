import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-with-out-push',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './with-out-push.component.html',
  styleUrl: './with-out-push.component.scss',
})
export class WithOutPushComponent {
  @Input() items: number[] = [];


  ngDoCheck(): void {
    debugger
}

}
