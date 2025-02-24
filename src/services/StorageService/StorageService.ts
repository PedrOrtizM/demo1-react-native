import AsyncStorage from "@react-native-async-storage/async-storage";

export class StorageService {

  public static async setItem(key: string, value: Object) {

    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  public static async getItem(key: string) {

    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  public static async removeItem(key: string) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export default StorageService;
