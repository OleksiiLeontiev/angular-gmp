import { Course } from '../models/course';

export const COURSES: Course[] = [
  {
    id: 1,
    name: 'Video Course 1. English course',
    date: '05/28/2022',
    length: 88,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: true,
    authors: [
      {
        id: '1',
        name: 'Alex',
      },
    ],
  },
  {
    id: 2,
    name: 'Video Course 2. English grammar',
    date: '05/20/2022',
    length: 68,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: false,
    authors: [
      {
        id: '1',
        name: 'Alex',
      },
    ],
  },
  {
    id: 3,
    name: 'Video Course 3. Angular course',
    date: '08/28/2020',
    length: 45,
    description:
      "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    isTopRated: true,
    authors: [
      {
        id: '1',
        name: 'Alex',
      },
    ],
  },
];
