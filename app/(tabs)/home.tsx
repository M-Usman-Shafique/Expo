import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function TabsHome() {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tabs Home</Text>
      <Link href="/(tabs)/profile" style={styles.link}>Go to Profile</Link>
      <Link href="/" style={styles.link}>Go to Home</Link>
    </View>
  )
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