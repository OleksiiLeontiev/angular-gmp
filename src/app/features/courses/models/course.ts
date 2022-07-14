export interface Course {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  authors: Author[];
  isTopRated: boolean;
}

export interface Author {
  id: string;
  name: string;
}

export interface CoursesListRequest {
  start: number;
  count: number;
  textFragment: string;
}

export interface CoursesListSuccess {
  list: Course[];
}

export interface CoursesState {
  coursesList: Course[];
  course: Course | null;
}

export interface DeleteCourseAction {
  id: number;
  currentTextFragment: string;
}

export interface GetCourseByIdAction {
  id: number;
}
