export interface User {
  id: number;
  token: string;
  name: UserName;
  login: string;
  password: string;
}

export interface UserName {
  first: string;
  last: string;
}
