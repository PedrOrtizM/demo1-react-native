import { IBaseHttp } from "@types";
import { ILoginResponse, IUserRegister } from "./types";
import { UserMapper } from "./UserMapper";
import { apiClient } from "../api";

class UserService {

  public static async login({ email, password }: { email: string; password: string }) {
    try {
      const response = await apiClient.post<IBaseHttp<ILoginResponse>>('/auth/login', { email, password });
      return UserMapper.format(response?.data?.data);

    } catch (error) {
      throw new Error('Error login');
    }
  }

  public static async tokenLogin(token: string) {
    const headers = { headers: { Authorization: `Bearer ${token}` } }
    try {
      const response = await apiClient.post<IBaseHttp<ILoginResponse>>('/auth/token', {}, headers);
      return UserMapper.format(response?.data?.data);

    } catch (error) {
      throw new Error('Error login');
    }
  }

  public static async register(userRegister: IUserRegister) {
    try {
      const user = UserMapper.formatUser(userRegister);
      const response = await apiClient.post<IBaseHttp<ILoginResponse>>('/auth/register', user);

      return UserMapper.format(response?.data?.data);
    } catch (error) {

      console.log(error);

      throw new Error('Error Register', error);
    }
  }

}
export default UserService;
