import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(mins: number, ...args: unknown[]): unknown {
    const hoursString = mins > 59 ? `${Math.floor(mins / 60)}h ` : '';
    const minutesString = mins % 60 ? `${mins % 60}min` : '';
    return `${hoursString}${minutesString}`;
  }
}
