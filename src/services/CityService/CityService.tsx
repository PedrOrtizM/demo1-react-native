import { apiClient } from "./api";
import { CityMapper } from "./CityMapper";
import { IBase, ICityResponse } from "./types";

class CityService {

  public static async getCities() {
    try {
      const response = await apiClient.get<IBase<ICityResponse>>("/cities");
      return CityMapper.format(response);
    } catch (error) {
      throw new Error("Error fetching cities");
    }
  }
}

export default CityService;
