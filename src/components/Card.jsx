import { Image, StyleSheet, Text, View } from "react-native";

export const Card = ({ title, url }) => {

  return (
    <View style={styles.card}>
      <Image resizeMode="cover" source={{ uri: url }} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  logo: {
    width: '100%',
    height: '100%',
    marginTop: 10,
  }
});