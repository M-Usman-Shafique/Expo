import { StyleSheet, Text, View } from 'react-native'

export default function XCard() {
  return (
    <View style={styles.card}>
    <Text style={styles.cardText}>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height: 100,
        width: 100,
        backgroundColor: "#ddd",
        marginRight: 12,
      },
    cardText: {
        fontSize: 18,
    },
})