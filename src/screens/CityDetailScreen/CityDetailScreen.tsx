import { useLocalSearchParams, useNavigation } from "expo-router";
import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect } from "react";
import { ICity } from "@types";

const CityDetailScreen = () => {
  const city: ICity = useLocalSearchParams() as any;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: city.name });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city.name}</Text>
      <Image style={styles.image} source={{ uri: city.url as string }} />
      <Text style={styles.description}>{city.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    paddingBottom: 5,
  },
  description: {
    marginTop: 20,
    paddingBottom: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  container: {
    padding: 30,
  },
});

export default CityDetailScreen;
