import { Image, StyleSheet, Text, View, Button } from "react-native";

export const Card = ({ agent, onPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{agent.displayName}</Text>
      <View style={styles.content}>
        <Image source={{ uri: agent.displayIcon }} style={styles.logo} />
        <Text numberOfLines={4} style={styles.description}>
          {agent.description}
        </Text>
      </View>

      <Button title="More" onPress={() => onPress(agent)} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff", 
    borderRadius: 10, 
    padding: 16, 
    marginVertical: 8, 
    marginHorizontal: 40, 
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 1 }, // Desplazamiento de la sombra
    shadowOpacity: 0.1,
    shadowRadius: 4, 
    elevation: 2, 
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  logo: {
    width: 80,
    marginTop: 10,
  },
  content: {
    flexDirection: "row",
  },
  description: {
    padding: 10,
    flexWrap: "wrap",
    width: 220,
  },
});
