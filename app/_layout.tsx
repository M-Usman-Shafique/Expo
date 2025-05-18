import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false}} />
      <Stack.Screen name="details" />
      <Stack.Screen name="about/index" />
    </Stack>
  )
}