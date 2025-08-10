import { IBaseHttp } from "@types";
import { CityMapper } from "./CityMapper";
import { ICityResponse } from "./types";
import { apiClient } from "../api";

class CityService {

  public static async getCities() {
    try {
      const response = await apiClient.get<IBaseHttp<ICityResponse[]>>('/cities');
      return CityMapper.format(response);
    } catch (error) {
      throw new Error('Error fetching cities');
    }
  }
}

export default CityService;
