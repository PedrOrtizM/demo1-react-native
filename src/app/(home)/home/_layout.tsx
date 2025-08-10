import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Cities",
          tabBarIcon: () => (
            <FontAwesome6 name="tree-city" size={24} color="black" />
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: () => (
            <FontAwesome name="user" size={24} color="black" />
          ),
        }}
      />

    </Tabs>
  );
};

export default TabLayout;
