import React from 'react';
import { FlatList, View, Text } from 'react-native-web';

export default function FlatListScreen() {
  const dados = [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
    'Item 5',
    'Item 6',
    'Item 7',
    'Item 8',
    'Item 9',
    'Item 10',
    'Item 11',
    'Item 12',
    'Item 13',
    'Item 14',
  ];
  const Item = ({ item }) => {
    return (
      <View style={{ borderBottomWidth: 1, paddingVertical: 8 }}>
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={dados}
      renderItem={Item}
    />
  );
}
