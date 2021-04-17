import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/styles';

export default function Login({ navigation }) {
  const [inputUser, setInputUser] = React.useState('');
  const [inputPass, setInputPass] = React.useState('');
  const [hidePass, setHidePass] = React.useState(true);

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.titleArea}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png',
            }}
          />
        </View>
        <Text style={styles.label}>Login</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={inputUser}
            onChangeText={(value) => setInputUser(value)}
          />
        </View>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            autoCompleteType="password"
            value={inputPass}
            onChangeText={(value) => setInputPass(value)}
            secureTextEntry={hidePass}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Lista')}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
