import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import Botao from './Botao';

export default function Botoes(props) {

  return (
    <View style={styles.container}>
        <Botao simbolo="+" cor="rgba(00, 255, 00, 0.5)" borda="rgba(00, 255, 00, 0.8)" clique={props.aumentar} />
        <Botao simbolo="-" cor="rgba(255, 00, 00, 0.5)" borda="rgba(255, 00, 00, 0.8)" clique={props.diminuir} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    }
});