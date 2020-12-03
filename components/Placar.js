import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

export default function Placar(props) {
  return (
    <View style={styles.container}>
        <View>
  <Text>Time {props.title}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  card: {
      alignItems: 'center',
      justifyContent: 'center',
  },
});