import { View } from "react-native";
import { CustomCarousel, Hero } from "@components";
import { useCities } from "src/hooks/useCities";
import { useUserActions } from "src/hooks/useUserActions";

const HomeScreen = () => {
  const { getCities } = useCities();
  const { user } = useUserActions();

  return (
    <View>
      <Hero
        userName={ user.firstName }
        title="MyTinerary"
        subTitle="Your perfect trip, just a click away."
      />
      <CustomCarousel cities={getCities.data} />
    </View>
  );
};

export default HomeScreen;
