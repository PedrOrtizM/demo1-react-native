import { Dimensions, StyleSheet, View, Text } from "react-native";
import { useState, useEffect } from "react";
import Carousel from "react-native-reanimated-carousel";
import { getAgents } from "../services/AgentService";
import { Card } from "../components/Card";

export const AgentList = () => {
  const [agents, setAgents] = useState([]);
  const width = Dimensions.get("window").width;
  

  useEffect(() => {
    getAgents().then(setAgents);
  }, []);

  const onPressAgent = (agent) => {
    console.log(agent.displayName);
  };

  return (
    <>
      <Text style={styles.title}>Agent List</Text>
      <View style={styles.carousel}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={agents}
          scrollAnimationDuration={3000}
          renderItem={({ item: agent }) => (
            <Card onPress={onPressAgent} agent={agent} key={agent.uuid} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    paddingVertical: 10,
  },
});
