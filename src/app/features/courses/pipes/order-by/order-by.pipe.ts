import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../../models/course';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(list: Course[], ...args: unknown[]): Course[] {
    return list.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }
}
