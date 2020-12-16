import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import Botao from './Botao';

export default function Botoes(props) {

  return (
    <View style={styles.container}>
      <Botao simbolo="+" borda="#23ba26" clique={props.aumentar} />
      <Botao simbolo="-" borda="#eb1a1a" clique={props.diminuir} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
});