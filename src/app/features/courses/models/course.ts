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
