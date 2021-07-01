import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Aluno from './Aluno';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Meu primeiro aplicativo - Jorge Maricato!</Text>
      <StatusBar style="auto" />
    </View>
    <Aluno />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
