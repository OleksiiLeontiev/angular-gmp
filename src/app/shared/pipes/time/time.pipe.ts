import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  private minsText: string = '';
  private hoursText: string = '';

  constructor(private traslateService: TranslateService) {
    this.minsText = this.traslateService.instant('BASE.MINUTES_SHORT');
    this.hoursText = this.traslateService.instant('BASE.HOURS_SHORT');
  }

  transform(mins: number, ...args: unknown[]): unknown {
    const hoursString =
      mins > 59 ? `${Math.floor(mins / 60)}${this.hoursText} ` : '';
    const minutesString = mins % 60 ? `${mins % 60}${this.minsText}` : '';
    return `${hoursString}${minutesString}`;
  }
}
