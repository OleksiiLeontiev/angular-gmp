import { Course } from '../models/course';

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Video Course 1. English course',
    creationDate: '05/28/2022',
    duration: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: true,
  },
  {
    id: 2,
    title: 'Video Course 2. English grammar',
    creationDate: '05/20/2022',
    duration: 68,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: false,
  },
  {
    id: 3,
    title: 'Video Course 3. Angular course',
    creationDate: '08/28/2020',
    duration: 45,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    topRated: true,
  },
];