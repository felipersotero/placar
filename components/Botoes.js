import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import Botao from './Botao';

export default function Botoes(props) {

  return (
    <View style={styles.container}>
        <Botao simbolo="+" cor="rgba(35, 186, 38, 0.7)" borda="rgba(13, 92, 14, 0.5)" clique={props.aumentar} />
        <Botao simbolo="-" cor="rgba(235, 26, 26, 0.7)" borda="rgba(181, 22, 22, 0.5)" clique={props.diminuir} />
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