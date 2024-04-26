import { Component } from '@angular/core';
import { GridComponent } from '../../grid/grid.component';
import { SignalMainComponent } from '../../signal-prep/signal-main/signal-main.component';
import { DataBindingComponent } from '../../data-binding/data-binding.component';
import { ControlFlowComponent } from '../../control-flow/control-flow.component';
import { ChangeDetectionOnPushComponent } from '../../change-detection/change-detection-on-push/change-detection-on-push.component';
import { PipeComponent } from '../../pipes/pipe/pipe.component';

@Component({
  selector: 'app-page-one',
  standalone: true,
  imports: [GridComponent, SignalMainComponent, DataBindingComponent, ControlFlowComponent, ChangeDetectionOnPushComponent, PipeComponent],
  templateUrl: './page-one.component.html',
  styleUrl: './page-one.component.scss'
})
export class PageOneComponent {

}
