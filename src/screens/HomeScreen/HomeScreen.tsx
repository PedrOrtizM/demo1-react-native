import { useEffect, useState } from "react";
import { View } from "react-native";
import { CustomCarousel, Hero } from "@components";
import { CityService } from "@services";


const HomeScreen = () => {

  const [cities, setCities] = useState([]);
  
  useEffect(() => {
    CityService.getCities().then(setCities), [];
  });

  return (
    <View>
      <Hero
        title="MyTinerary"
        subTitle="Your perfect trip, just a click away."
      />
      <CustomCarousel cities={cities} />
    </View>
  );
};

export default HomeScreen;