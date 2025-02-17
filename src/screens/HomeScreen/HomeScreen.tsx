import { View } from "react-native";
import { CustomCarousel, Hero } from "@components";
import { useCities } from "src/hooks/useCities";

const HomeScreen = () => {

  const { getCities } = useCities();

  return (
    <View>
      <Hero
        title="MyTinerary"
        subTitle="Your perfect trip, just a click away."
      />
      <CustomCarousel cities={getCities.data} />
    </View>
  );
};

export default HomeScreen;
