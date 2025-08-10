export interface ILoginResponse {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  image: string;
  token: string;
}

export interface IUserRegisterDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  country: string;
  description?: string;
  image?: string;
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
