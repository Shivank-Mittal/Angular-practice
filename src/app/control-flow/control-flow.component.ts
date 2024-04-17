import { AfterContentInit, Component, DoCheck, Input, OnChanges, SimpleChanges, WritableSignal, effect, inject } from '@angular/core';
import { SignalPrepService } from '../services/signal-prep/signal-prep.service';
import { Vehicle } from '../types/Vehicle';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [JsonPipe],
  providers: [SignalPrepService],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent implements OnChanges, DoCheck, AfterContentInit{

  @Input() numberOfCars: {count: number} = { count: 0}

  // signalService = inject(SignalPrepService);
  serviceFrom =  this.signalService.updatedFrom;
  currentVehicle =  this.signalService.vehicle;
  noOfCars:number = 0
  
  constructor(private signalService: SignalPrepService){
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    debugger
    if(changes){
      console.log(`Count update to ${changes['numberOfCars'].currentValue.count}`)
      this.noOfCars = changes['numberOfCars'].currentValue.count
    }
  }
  
  ngDoCheck(): void {
    debugger
  }

  ngAfterContentInit(): void {
    debugger
  }

  buyFromHere(){
    this.signalService.buyNewVehicle('control flow');
  }
}
