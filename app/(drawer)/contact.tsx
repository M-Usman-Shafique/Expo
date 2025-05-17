import { StyleSheet, Text, View } from 'react-native'

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact</Text>
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
