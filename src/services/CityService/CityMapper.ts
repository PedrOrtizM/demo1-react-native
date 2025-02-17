import { AxiosResponse } from "axios";
import { IBase, ICityResponse } from "./types";
import { ICity } from "src/types/ICity";

export class CityMapper {

  static format(response: AxiosResponse<IBase<ICityResponse>>): ICity[] {
    return response?.data?.data?.map(({ _id: id, name, image: url, description }) => ({
      id,
      name,
      url,
      description
    }));
  }
}
