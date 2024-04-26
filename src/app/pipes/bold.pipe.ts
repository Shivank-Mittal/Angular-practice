import { Pipe, PipeTransform, Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'bold',
  standalone: true,
})
export class BoldPipe implements PipeTransform {

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  transform(value: string): unknown {
    return this.sanitizeFunction(this.replace(value));
  }

  replace(value: string) {
    return value.replace(value, `<b> ${value} </b>`)
  }

  sanitizeFunction(str: string){
    return this.sanitizer.bypassSecurityTrustHtml(str)
  }

}
