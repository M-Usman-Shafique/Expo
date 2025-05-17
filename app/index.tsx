import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const username = "Usman";

  const gotoUser = () => {
      router.navigate({
        pathname: '/user/[name]',
        params: { name: username }
      })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Homepage</Text>
      <Link href={`/user/${username}`} style={styles.link}>Go to Profile</Link>
      <Pressable onPress={gotoUser}>
        <Text>View Profile</Text>
      </Pressable>
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