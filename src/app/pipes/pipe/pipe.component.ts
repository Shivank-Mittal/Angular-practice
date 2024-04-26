import { CurrencyPipe, DecimalPipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BoldPipe } from '../bold.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe, UpperCasePipe, BoldPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {

  amount:number = 2000
  name = 'Shivank'

}
