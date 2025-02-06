import { View, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { CityCard } from "@components";
import { CityService } from "@services";
import { ICity } from "src/types/ICity";

const CitiesScreen = () => {
  
  const router = useRouter();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    CityService.getCities().then(setCities), [];
  });

  const onPressCity = (city: ICity) => {
    router.push({ pathname: `/city/${city.name}`, params: { ...city } });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CityCard city={item} onPress={onPressCity} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",
    padding: 10,
    marginTop: 20,
  },
  list: {
    alignItems: "center",
  },
});

export default CitiesScreen;
