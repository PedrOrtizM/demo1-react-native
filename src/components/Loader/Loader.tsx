import { ActivityIndicator, View } from "react-native";
import { useAxiosInterceptor } from "src/hooks/useInterceptor";

export const Loader = () => {
  const { value } = useAxiosInterceptor();
  
  if (value > 0) {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <ActivityIndicator size="large" color="#6662de"/>
      </View>
    );
  }
};

export default Loader;
