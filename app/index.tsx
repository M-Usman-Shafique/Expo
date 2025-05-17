import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Homepage</Text>
      <Link href="/user/john/male/20" style={styles.link}>Go to User1</Link>
      <Link href="/user/sara/female/25" style={styles.link}>Go to User2</Link>
      <Link href="/user/neil/20/kid" style={styles.link}>Go to User3</Link>
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