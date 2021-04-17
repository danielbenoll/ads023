import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Lista from './pages/Lista';
import Cadastro from './pages/Cadastro';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles/styles';
const Stack = createStackNavigator();

const customOptions = {
  title: 'Fórmula 1',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#242424',
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Lista"
          component={Lista}
          options={{ ...customOptions, title: 'Pilotos'}}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ ...customOptions, title: 'Cadastro' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
