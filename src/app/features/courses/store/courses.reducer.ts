import { createReducer, on } from '@ngrx/store';
import { CoursesState } from '../models/course';
import * as CoursesActions from './';

export const initialState: CoursesState = {
  coursesList: [],
  course: null,
};

export const coursesReducer = createReducer(
  initialState,
  on(CoursesActions.getCoursesList, (state) => state),
  on(CoursesActions.getCoursesListSuccess, (state, { list }) => ({
    coursesList: list,
    course: null,
  })),
  on(CoursesActions.getCourseById, (state) => state),
  on(CoursesActions.getCourseByIdSuccess, (state, course) => ({
    ...state,
    course,
  })),
  on(CoursesActions.deleteCourse, (state) => state),
  on(CoursesActions.createCourse, (state) => state),
  on(CoursesActions.updateCourse, (state) => state)
);
