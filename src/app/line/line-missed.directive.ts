import {AfterViewInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appLineMissed]'
})
export class LineMissedDirective implements AfterViewInit {

  @Input() stopTime: number;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    const date = new Date();
    date.setTime(date.getTime());
    if (date.getHours() * 60 + date.getMinutes() > this.stopTime) {
      this.el.nativeElement.style.opacity = '0.5';
    }
  }

}
