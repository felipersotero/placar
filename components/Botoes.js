import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

import Botao from './Botao';

export default function Botoes(props) {

  return (
    <View style={styles.container}>
        <Botao simbolo="+" cor="#0f0" clique={props.aumentar} />
        <Botao simbolo="-" cor="#f00" clique={props.diminuir} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30
    }
});