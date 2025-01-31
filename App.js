import { ScrollView, StyleSheet, View } from "react-native";
import { Home } from "./src/screens/Home";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Home />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
});
