import { Link, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function UserDetails() {
  const { rest } = useLocalSearchParams<{ rest: string[]}>();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{rest.join("/")}</Text>
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