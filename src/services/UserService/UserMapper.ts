import { IUser } from "@types";
import { ILoginResponse, IUserRegister, IUserRegisterDto } from "./types";

export class UserMapper {

  static format(response: ILoginResponse): IUser {
    const { _id: id, first_name: firstName, last_name: lastName, ...rest } = response;
    return { id, firstName, lastName, ...rest }
  }

  static formatUser(user: IUserRegister): IUserRegisterDto {
    const { firstName: first_name, lastName: last_name, ...rest } = user;
    return { first_name, last_name, ...rest }
  }
}
