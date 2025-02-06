import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";

const CityCard = ({ onPress, city }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(city)}>
      <Image source={{ uri: city.url }} style={styles.image} />
      <Text style={styles.name}>{city.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // Dirección de la sombra (hacia abajo)
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 10,
    alignItems: "center",
    padding: 10,
    width: 300,
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default CityCard;
