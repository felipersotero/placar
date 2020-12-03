import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function Botao(props) {

  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: props.cor}]} onPress={props.clique}>
        <Text style={styles.buttonText}>
            {props.simbolo}
        </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
      height: 80,
      width: 80,
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
  },
  buttonText: {
      fontSize: 36,
      fontWeight: 'bold'
  }
});