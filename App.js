import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Placar from './components/Placar';
import Botoes from './components/Botoes';

export default function App() {

  const[placar1, setPlacar1] = useState(0);
  const[placar2, setPlacar2] = useState(0);

  function aumentar1(){
    setPlacar1(placar1 + 1)
  }

  function diminuir1(){
    setPlacar1(placar1 > 0 ? placar1 - 1 : placar1)
  }

  function aumentar2(){
    setPlacar2(placar2 + 1)
  }

  function diminuir2(){
    setPlacar2(placar2 > 0 ? placar2 - 1 : placar2)
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Placar</Text>
      </View>
      <View style={styles.scores}>
        <Placar team={1} value={placar1} />
        <Text style={styles.x}>X</Text>
        <Placar team={2} value={placar2} />
      </View>
      <View style={styles.buttons}>
        <Botoes aumentar={aumentar1} diminuir={diminuir1} />
        <Botoes aumentar={aumentar2} diminuir={diminuir2} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 15,
  },
  title: {
    flex: 2,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 42,
  },
  scores: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  x: {
    fontSize: 36,
  },
  buttons: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center'
  }
});