import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-with-push',
  standalone: true,
  imports: [ JsonPipe],
  templateUrl: './with-push.component.html',
  styleUrl: './with-push.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithPushComponent {
  @Input() items:number[] = []

  constructor(private cd: ChangeDetectorRef){}

  exeChangeDetaction() {
    this.cd.markForCheck()
  }
}
