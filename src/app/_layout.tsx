import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ title: "Cities", headerShown: false }}
      />
      <Stack.Screen name="city/[name]" />
    </Stack>
  );
};

export default RootLayout;
