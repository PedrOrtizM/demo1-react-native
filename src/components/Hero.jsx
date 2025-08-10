import { View, Text, Button, StyleSheet } from "react-native";

export const Hero = ({ title, subTitle }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>{title} </Text>
      <Text style={styles.subTitle}> {subTitle} </Text>
      <Button title="Explore" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
  subTitle: {
    marginBottom: 20
  }
})
