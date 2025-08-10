import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Stack } from "expo-router";
import { Loader } from "@components";

const queryClient = new QueryClient();

const RootLayout = () => {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: "Cities", headerShown: false }}
        />
        <Stack.Screen name="city/[name]" />
      </Stack>
      <Loader />
    </QueryClientProvider>
  );
};

export default RootLayout;
