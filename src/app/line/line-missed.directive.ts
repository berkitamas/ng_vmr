import {AfterViewInit, Directive, ElementRef, HostBinding, Input} from '@angular/core';


/**
 * This directive adds a "missed" class when the user missed the train
 * So when the train stops before the current time
 */
@Directive({
  selector: '[appLineMissed]'
})
export class LineMissedDirective implements AfterViewInit {

  @Input() stopTime: number;

  @HostBinding('class.missed')
  elementClass = '';

  constructor() {
  }

  ngAfterViewInit(): void {
    const date = new Date();
    date.setTime(date.getTime());
    if (date.getHours() * 60 + date.getMinutes() > this.stopTime) {
      this.elementClass = 'yes';
    }
  }

}
