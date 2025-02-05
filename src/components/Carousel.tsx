import Carousel from "react-native-reanimated-carousel";
import { CarouselRenderItemInfo } from "react-native-reanimated-carousel/lib/typescript/types";
import { View, Dimensions, StyleSheet } from "react-native";
import { Card } from "./Card";
import { City } from "../services/mockCities";

export const CustomCarousel = ({ cities }) => {
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        style={styles.carousel}
        loop
        autoPlay
        scrollAnimationDuration={3000}
        width={width * 0.8}
        height={width / 2}
        data={cities}
        renderItem={({ item }: CarouselRenderItemInfo<City>) => (
          <Card title={item?.name} url={item?.url}></Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: "center",
    padding: 10,
  },
  carousel: {
    minHeight: 300,
  },
});
