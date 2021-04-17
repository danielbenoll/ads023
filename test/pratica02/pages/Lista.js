import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../styles/styles';

export default function List({ navigation }) {
  const list = [
    {
      id: 1,
      name: 'LEWIS HAMILTON (INGLATERRA)',
      position: 'Mercedes',
    },
    {
      id: 2,
      name: 'MAX VERSTAPPEN (HOLANDA)',
      position: 'RBR',
    },
    {
      id: 3,
      name: 'LANDO NORRIS (INGLATERRA)',
      position: 'MCLAREN',
    },
    {
      id: 4,
      name: 'LANCE STROLL (CANADÁ)',
      position: 'ASTON MARTIN',
    },
    {
      id: 5,
      name: 'FERNANDO ALONSO (ESPANHA)',
      position: 'ALPINE',
    },
    {
      id: 6,
      name: 'CHARLES LECLERC (MÔNACO)',
      position: 'FERRARI',
    },
    {
      id: 7,
      name: 'YUKI TSUNODA (JAPÃO)',
      position: 'HONDA',
    },
    {
      id: 8,
      name: 'GEORGE RUSSELL (INGLATERRA)	',
      position: 'WILLIAMS',
    },
    {
      id: 9,
      name: 'ESTEBAN OCON (FRANÇA)',
      position: 'RENAULT',
    },
  ];
  return (
    <View style={styles.main}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.list}
          data={list}
          renderItem={({ item }) => (
            <View
              keyExtractor={(item) => item.id.toString()}
              style={styles.list_item}
            >
              <Text style={styles.list_item_position}>{item.position}</Text>
              <Text style={styles.list_item_name}>{item.name}</Text>
            </View>
          )}
        />
    </View>
  );
}
