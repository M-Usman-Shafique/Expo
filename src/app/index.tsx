import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center gap-8 bg-zinc-800">
      <Text className="font-semibold text-4xl text-gray-200">Homepage</Text>
      <Link href="../modal/home" className="underline text-gray-200">Go to Modal</Link>
    </View>
  );
}