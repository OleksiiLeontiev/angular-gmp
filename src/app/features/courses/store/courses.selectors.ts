import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Course, CoursesState } from '../models/course';

export const selectCoursesState =
  createFeatureSelector<CoursesState>('courses');

export const selectCoursesList = createSelector(
  selectCoursesState,
  (courses: CoursesState): Course[] => courses.coursesList
);

export const selectCourse = createSelector(
  selectCoursesState,
  (courses: CoursesState): Course | null => courses.course
);
