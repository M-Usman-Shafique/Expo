import { Link, router, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function User() {
    const { name, limit } = useLocalSearchParams<{ name: string, limit: string}>();
    console.log(limit)

    const increaseLimit = () => {
      router.setParams({ limit: 50 });
    }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello, {name}</Text>
        <Link href="/" style={styles.link}>Go to Home</Link>
        <Link
          href={{
            pathname: '/user/[name]',
            params: { name, limit: 50 }
          }}
          style={styles.link}
        >
          View more pages
        </Link>
        <Pressable onPress={increaseLimit}>
          <Text>View more pages</Text>
        </Pressable>
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