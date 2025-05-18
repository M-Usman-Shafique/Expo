import XCard from '@/components/XCard'
import { Link } from 'expo-router'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default function VerticalScroll() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Vertical Scroll View</Text>
      
      <FlatList
        data={Array.from({ length: 48 })}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <XCard />}
        numColumns={3}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      <Link href="/" style={styles.link}>Go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 18,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  row: {
    marginBottom: 12,
  },
  link: {
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 10,
    color: "#3b82f6",
  },
});