import { COURSES } from '../mocks/mock-courses';
import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('orderBy pipe sorts correctly', () => {
    const pipe = new OrderByPipe();
    const courses = COURSES;
    expect(pipe.transform(courses)[0].id).toEqual(3);
  });
});
