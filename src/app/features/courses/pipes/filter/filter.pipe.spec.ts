import { COURSES } from '../../mocks/mock-courses';
import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
  it('filter pipe works correctly with value', () => {
    const pipe = new FilterPipe();
    const courses = COURSES;
    expect(pipe.transform(courses, 'English').length).toEqual(2);
  });
  it('filter pipe works correctly without value', () => {
    const pipe = new FilterPipe();
    const courses = COURSES;
    expect(pipe.transform(courses, '').length).toEqual(3);
  });
});
