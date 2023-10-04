import AsyncStorage from '@react-native-async-storage/async-storage';

export const getDataFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('key');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
    }
};
  