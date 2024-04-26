import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent implements AfterViewInit {
  @Input() header: string = 'Not Defined'
  @ViewChild('content') content: ElementRef | undefined;

  constructor( private changeDet: ChangeDetectorRef){}
  
  
  ngAfterViewInit(): void {
    if(this.content ) {
      let child = this.content.nativeElement.children[0]?.attributes['title']?.value;
      this.header = child ? this.convertFirstLetter(child) : ''
    }
    this.changeDet.detectChanges();
  }

  convertFirstLetter(value: string): string{
    const v = [...value];
    v[0] = v[0].toUpperCase()
    return v.join('')
  }


}
