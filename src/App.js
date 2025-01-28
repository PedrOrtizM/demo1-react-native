import { ScrollView, StyleSheet, View } from "react-native";
import { AgentList } from "./pages/AgentList";

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <AgentList />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 80, 
    marginHorizontal: 40, 
  },
});
