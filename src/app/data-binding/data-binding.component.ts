import { Component } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  standalone: true,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {

  checkInterpolation = 15
  propertyBinidingForCheckbox = true

  enventBind(test: HTMLElement) {
    console.log(test)
  }
}
