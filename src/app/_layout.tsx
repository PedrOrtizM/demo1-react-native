import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Loader } from "@components";
import { Provider } from "react-redux";
import { store } from "src/store/store";

const queryClient = new QueryClient();

const RootLayout = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen
            name="(home)"
            options={{ title: "Home", headerShown: false }}
          />
          <Stack.Screen name="login/index" options={{ title: "Login" }} />
          <Stack.Screen name="register/index" options={{ title: "Register" }} />
        </Stack>
        <Loader />
      </QueryClientProvider>
    </Provider>
  );
};

export default RootLayout;
