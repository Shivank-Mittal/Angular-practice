import { Component } from '@angular/core';
import { GridComponent } from '../../grid/grid.component';
import { executeGeneratorMemoiseFn } from '../../../../node_modules/ts-practice/src/Topics/memoization'

@Component({
  selector: 'app-js',
  standalone: true,
  imports: [GridComponent],
  templateUrl: './js.component.html',
  styleUrl: './js.component.scss'
})
export class JsComponent {


  executor = executeGeneratorMemoiseFn()
  executionTileResult:number[] = [] 
   
  executeMemoizedFunction(){
    const result = this.executor.next()
    if(!result.done) {
      this.executionTileResult.push(result.value)
    }
  }
}
