import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';

export default function Register({ navigation }) {
  const [nome, setNome] = React.useState('');
  const [equipe, setEquipe] = React.useState('');
  const [pais, setPais] = React.useState('');

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={(value) => setNome(value)}
          />
        </View>

        <Text style={styles.label}>Equipe</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={equipe}
            onChangeText={(value) => setEquipe(value)}
          />
        </View>

        <Text style={styles.label}>País</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={pais}
            onChangeText={(value) => setPais(value)}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Lista')}
        >
          <Text style={styles.textButton}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
