import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

const CityDetailScreen = () => {
  const city = useLocalSearchParams();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: city.name });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{city.name}</Text>
      <Image style={styles.image} source={{ uri: city.url as string }} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderColor: 'gray',
    color: 'gray',
    marginBottom: 20,
    paddingBottom: 5
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
