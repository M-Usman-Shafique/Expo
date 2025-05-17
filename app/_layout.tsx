import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="(groups)" options={{ headerShown: false}} />
      <Stack.Screen name="details" />
      <Stack.Screen name="about" />
    </Stack>
  )
}