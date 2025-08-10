import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { CityCard } from "@components";
import { useCities } from "src/hooks/useCities";
import { ICity } from "src/types/ICity";

const CitiesScreen = () => {

  const router = useRouter();
  const [citiesFiltered, setCitiesFiltered] = useState<ICity[]>([]);
  const { getCities, getCitiesBy } = useCities();

  useEffect(() => {
    setCitiesFiltered(getCities.data);
  }, [getCities.data]);

  const onPressCity = (city: ICity) => {
    router.push({ pathname: `/city/${city.name}`, params: { ...city } });
  };

  const filterCities = (searchText: string) => {
    const citiesFiltered = getCitiesBy(searchText)
    setCitiesFiltered( citiesFiltered )
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchText}
        onChangeText={filterCities}
        placeholder={"Search city here…"}
      />

      <FlatList
        data={citiesFiltered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CityCard city={item} onPress={onPressCity} />
        )}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={getCities.isLoading} onRefresh={getCities.refetch} />
         }
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
  searchText: {
    margin: 20,
    height: 48,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    color: "#333",
    borderWidth: 1,
    borderColor: "gray",
  },
});

export default CitiesScreen;
