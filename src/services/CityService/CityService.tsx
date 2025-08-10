import { mockCities } from "./mockCities";

class CityService {
  
  public async getCities() {
    return mockCities;
  }
}

export default new CityService();
