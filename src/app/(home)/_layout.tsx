import { Stack } from "expo-router";
import { SessionGuard } from "src/guards/SessionGuard/SessionGuard";

const HomeLayout = () => {
  return (
    <SessionGuard>
      <Stack>
        <Stack.Screen
          name="home"
          options={{ title: "Cities", headerShown: false }}
        />
        <Stack.Screen name="city/[name]" />
      </Stack>
    </SessionGuard>
  );
};

export default HomeLayout;
