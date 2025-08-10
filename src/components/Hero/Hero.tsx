import { View, Text, Button, StyleSheet } from "react-native";

const Hero = ({ title, subTitle, userName }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hola { userName } </Text>
      <Text style={styles.title}>{title} </Text>
      <Text style={styles.subTitle}> {subTitle} </Text>
      <Button title="Explore" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  name: {
    fontSize: 20,
    marginBottom: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  subTitle: {
    marginBottom: 30,
  },
});

export default Hero;
