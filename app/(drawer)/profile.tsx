import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
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
