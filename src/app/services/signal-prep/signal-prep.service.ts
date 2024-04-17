import { ElementRef, Injectable, Renderer2, Signal, WritableSignal, inject, signal } from '@angular/core';
import { Vehicle, MODEL_TYPE } from '../../types/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class SignalPrepService {
  renderer =  inject(Renderer2);

  _vehicle: WritableSignal<Vehicle>;
  _updatedFrom = 'service'
  constructor() {
    this._vehicle = signal<Vehicle>({ name: 'Pourche', model: MODEL_TYPE.TOP, count: 1});
   }

   get vehicle(){
    return this._vehicle
   }

   get updatedFrom() {
    return this._updatedFrom
   }

   buyNewVehicle( from:string = '', el:ElementRef | undefined = undefined ) {
    if(from) {
      this._updatedFrom = from
    }
    this._vehicle.update((cv) => ({...cv ,count: ++cv.count}))
    if(el) {
      new Promise(res => res(this.renderer.setStyle(el, 'backgroundColor', 'green'))).
      then(()=> {
        setTimeout(() => {
          this.renderer.setStyle(el, 'backgroundColor', 'white');
        }, 100)
      })
     
    }
   }
}

