import { StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import Routes from './src/Rotas';

import UsuarioContextProvider from './src/Contexto/UsuarioContex';

export default function App() {
  return (
    <UsuarioContextProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#013A63" barStyle="light-content" />
        <Routes/>
      </NavigationContainer>
    </UsuarioContextProvider>

    
  );
}