import { useEffect } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { apiClient } from "src/services/api";
import { increment, decrement } from "src/store/actions/requestCounterAction";
import { RootState } from "src/store/store";

export const useAxiosInterceptor = () => {

  const dispatch = useDispatch();
  const { value } = useSelector((store: RootState) => store.requestCounterReducer);


  useEffect(() => {

    const requestInterceptor = apiClient.interceptors.request.use((config) => {
      dispatch(increment());
      return config;
    });

    const responseInterceptor = apiClient.interceptors.response.use(
      (response) => {
        dispatch(decrement());
        return response;
      },
      (error) => {
        Alert.alert('Error', 'Something went wrong.');
        dispatch(decrement());
        return Promise.reject(error);
      }
    );

    return () => {
      apiClient.interceptors.request.eject(requestInterceptor);
      apiClient.interceptors.response.eject(responseInterceptor);
    };
  }, [value]);

  return { value }
};
