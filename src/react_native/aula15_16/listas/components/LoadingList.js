import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default function LoadingListScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .finally(() => setLoading(false));
  }, []);

  const Item = ({ item }) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          padding: 10,
        }}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" animating />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(item) => item.id}
          renderItem={Item}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
