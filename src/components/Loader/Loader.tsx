import { useIsFetching } from "@tanstack/react-query";
import { ActivityIndicator, View } from "react-native";

export const Loader = () => {
  const isFetching = useIsFetching();
  if (isFetching > 0) {
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
        <ActivityIndicator size="large" color="#333333"/>
      </View>
    );
  }
};

export default Loader;