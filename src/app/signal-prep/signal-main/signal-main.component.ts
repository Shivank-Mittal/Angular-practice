import { Component, ElementRef, OnChanges, SimpleChanges, inject, } from '@angular/core';
import { SignalPrepService } from '../../services/signal-prep/signal-prep.service';
import { ControlFlowComponent } from '../../control-flow/control-flow.component';

@Component({
  selector: 'app-signal-main',
  standalone: true,
  imports: [ControlFlowComponent],
  providers: [SignalPrepService],
  templateUrl: './signal-main.component.html',
  styleUrl: './signal-main.component.scss'
})
export class SignalMainComponent {
  el = inject(ElementRef);
  signalService = inject(SignalPrepService);
  
  serviceFrom = this.signalService.updatedFrom;
  currentVehicle =  this.signalService.vehicle;


  buyNewCar() {
    const infoElement = this.el.nativeElement.querySelector('#info');
    this.signalService.buyNewVehicle('signal main component', infoElement);
  }
}
