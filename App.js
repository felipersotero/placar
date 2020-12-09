import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import {MaterialCommunityIcons} from '@expo/vector-icons'

import Constants from 'expo-constants';

import Placar from './components/Placar';
import Botoes from './components/Botoes';
import Configuracoes from './components/Configuracoes';

export default function App() {

  const[placar1, setPlacar1] = useState(0);
  const[placar2, setPlacar2] = useState(0);
  const[visible, setVisible] = useState(false);

  //funcoes de modificar o placar

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

  //funcoes para mostrar as configuracoes

  function showConfig(){
    setVisible(!visible)
  }

  function hideConfig(){
    setVisible(false)
  }
  // function hideDialog(){
  //   setVisible(false)
  // }

  return (
    <View style={styles.container} >
      <View style={styles.header}> 
        <View style={styles.title}>
          <Text style={styles.titleText}>Placar</Text>
        </View>
        <View style={styles.settings}>
          <TouchableOpacity onPress={ showConfig } >
            <MaterialCommunityIcons name="settings" size={36} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.scores}>
        <Placar team={1} value={placar1} />
        <Text style={{fontSize: 36}}>X</Text>
        <Placar team={2} value={placar2} />
      </View>
      <View style={styles.buttons}>
        <Botoes aumentar={aumentar1} diminuir={diminuir1} />
        <Botoes aumentar={aumentar2} diminuir={diminuir2} />
      </View>
      <StatusBar style="auto" />
      <View style={{position: 'absolute'}}>
        {visible && <Configuracoes sair={hideConfig} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 2,
    backgroundColor: '#d9d9d9',
    flexDirection: 'row',
  },
  title: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 42,
  },
  settings: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scores: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center'
  }
});