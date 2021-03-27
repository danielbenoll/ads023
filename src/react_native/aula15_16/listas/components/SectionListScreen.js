import React from 'react';
import { SectionList, Text, View } from 'react-native';

export default function SectionListScreen() {
  const dados = [
    { title: 'Seção 1', data: ['Item 1', 'Item 2', 'Item 3'] },
    { title: 'Seção 2', data: ['Item 1', 'Item 2', 'Item 3', 'Item 4'] },
  ];
  const Item = ({ item }) => {
    return (
      <View style={{ borderBottomWidth: 1, paddingVertical: 8 }}>
        <Text>{item}</Text>
      </View>
    );
  };
  const Secao = ({ section }) => {
    return (
      <Text style={{ fontWeight: 'bold', paddingTop: 16 }}>
        {section.title}
      </Text>
    );
  };
  return (
    <SectionList
      sections={dados}
      renderItem={Item}
      renderSectionHeader={Secao}
    />
  );
}
