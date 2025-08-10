import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { globalStyles } from "src/styles/global";

const CityCard = ({ onPress, city }) => {
  return (
    <TouchableOpacity style={[globalStyles.card, styles.card]} onPress={() => onPress(city)}>
      <Image source={{ uri: city.url }} style={styles.image} />
      <Text style={styles.name}>{city.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    maxWidth: 300,
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
