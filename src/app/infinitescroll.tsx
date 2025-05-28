import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, View } from 'react-native';

type Product = {
    id: string;
    thumbnail: string;
  };

export default function InfiniteScroll() {
  const [products, setProducts] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=6&skip=${skip}`);
      const data = await res.json();

      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + 6);
      if (data.products.length < 6) setHasMore(false);
    } catch (err) {
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  }, [skip, loading, hasMore]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderItem = ({ item }: { item: Product }) => (
    <View className="mx-6 my-2 p-3 bg-white/10 rounded-xl">
      <Image
        source={{ uri: item.thumbnail }}
        className="w-full h-48"
        resizeMode="contain"
      />
    </View>
  );

  const renderFooter = () =>
    loading ? <ActivityIndicator className="my-4" size="large" color="#fff" /> : null;

  return (
    <View className="flex-1 bg-neutral-950">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onEndReached={fetchProducts}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}
