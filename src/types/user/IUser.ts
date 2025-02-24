export interface IUser {
  id:string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  image: string;
  token: string;
}

export interface IUserForm {
  email: string;
  password: string;
}

export interface IUserRegister {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  description?: string;
  image?: string;
}
