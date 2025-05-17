import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About</Text>
      <Link href="/details" style={styles.link}>Go to Details</Link>
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