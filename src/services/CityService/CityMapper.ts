import { AxiosResponse } from "axios";
import { ICity, IBaseHttp } from "@types";
import { ICityResponse } from "./types";

export class CityMapper {

  static format(response: AxiosResponse<IBaseHttp<ICityResponse[]>>): ICity[] {
    return response?.data?.data?.map(({ _id: id, name, image: url, description }) => ({
      id,
      name,
      url,
      description
    }));
  }
}
