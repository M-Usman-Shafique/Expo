import { Slot } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function ProdLayout() {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Layout Header</Text>
        <Slot />
        <Text style={styles.footer}>Layout Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        width: "100%",
        padding: 10,
        backgroundColor: "#ccc",
        textAlign: "center",
    },
    footer: {
        width: "100%",
        padding: 10,
        backgroundColor: "#ccc",
        textAlign: "center",
    }
})