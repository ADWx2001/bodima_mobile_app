import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const authLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="first" options={{ headerShown: false }} />
        <Stack.Screen name="second" options={{ headerShown: false }} />
        <Stack.Screen name="third" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default authLayout;
