import YCard from '@/components/YCard'
import { Link } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function VerticalScroll() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vertical Scroll View</Text>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {Array.from({ length: 50 }).map((_, i) => (
          <YCard key={i} />
        ))}
      </ScrollView>

      <Link href="/" style={styles.link}>Go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 10,
    color: "#3b82f6",
  },
});