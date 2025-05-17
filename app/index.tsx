import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Homepage</Text>
      <Link href="/about" style={styles.link}>Go to About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "heavy"
  },
  link: {
  textDecorationLine: "underline",
  }
})