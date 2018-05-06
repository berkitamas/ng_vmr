import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(temp: number, from: string, to: string): string {
    if (from === 'fahrenheit') {
      if (to === 'celsius') {
        temp = (temp - 32) * (5 / 9);
      }
      return temp.toFixed(0) + ' °C';
    } else if (from === 'celsius') {
      if (to === 'fahrenheit') {
        temp = temp * (9 / 5) + 32;
      }
      return temp.toFixed(0) + ' °F';
    }
    return temp.toFixed(0);
  }

}
