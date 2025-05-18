import { Link } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import XCard from '@/components/XCard'

export default function HorizontalScroll() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Horizontal Scroll View</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <XCard key={i} />
        ))}
      </ScrollView>


    <Link href="/" style={styles.link}>Go to Home</Link>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      paddingHorizontal: 20,
    },
    heading: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    link: {
      marginTop: 20,
      textAlign: "center",
      textDecorationLine: "underline",
      color: "#3b82f6",
    },
  });