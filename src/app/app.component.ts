import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignalMainComponent } from './signal-prep/signal-main/signal-main.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GridComponent } from './grid/grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalMainComponent, DataBindingComponent, NavBarComponent, GridComponent, ControlFlowComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'learning-angular';
}
