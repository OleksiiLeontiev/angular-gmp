import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: Course[], searchString: string): Course[] {
    if (!searchString) return items;

    return items.filter((item) => item.title.indexOf(searchString) !== -1);
  }
}
