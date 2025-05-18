import { StyleSheet, Text, View } from 'react-native'

export default function YCard() {
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
        height: 60,
        backgroundColor: "#ddd",
        marginBottom: 12,
    },
    cardText: {
    fontSize: 18,
    },
})