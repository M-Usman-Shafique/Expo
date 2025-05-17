import { StyleSheet, Text, View } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'

export default function User() {
    const { name } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, {name}</Text>
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