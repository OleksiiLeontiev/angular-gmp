import { createAction, props } from '@ngrx/store';
import {
  Course,
  CoursesListRequest,
  CoursesListSuccess,
  DeleteCourseAction,
  GetCourseByIdAction,
} from '../models/course';

export const getCoursesList = createAction(
  '[Courses] getCoursesList',
  props<CoursesListRequest>()
);
export const getCoursesListSuccess = createAction(
  '[Courses] getCoursesListSuccess',
  props<CoursesListSuccess>()
);

export const getCourseById = createAction(
  '[Courses] getCourseById',
  props<GetCourseByIdAction>()
);
export const getCourseByIdSuccess = createAction(
  '[Courses] getCourseByIdSuccess',
  props<Course>()
);

export const deleteCourse = createAction(
  '[Courses] deleteCourse',
  props<DeleteCourseAction>()
);

export const createCourse = createAction(
  '[Courses] createCourse',
  props<Course>()
);

export const updateCourse = createAction(
  '[Courses] updateCourse',
  props<Course>()
);
