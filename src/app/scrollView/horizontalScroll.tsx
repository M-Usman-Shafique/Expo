import XCard from '@/src/components/XCard';
import { Link } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HorizontalScroll() {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Horizontal Scroll View</Text>

        <FlatList
        data={Array.from({ length: 20 })}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <XCard />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />


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