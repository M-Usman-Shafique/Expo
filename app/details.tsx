import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Details</Text>
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