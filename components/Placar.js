import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';

export default function Placar(props) {
  return (
    <View style={styles.container}>
        <View style={styles.team}>
          <Text style={styles.teamText}>
            {props.team}
          </Text>
        </View>
        <View style={styles.value}>
          <Text style={styles.valueText}>
            {props.value}
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 3,
    borderTopColor: '#d9d9d9',
    borderRightColor: '#d9d9d9',
    borderLeftColor: '#ccc',
    borderBottomColor: '#ccc'
  },
  team: {
    flex: 1,
  },
  teamText: {
    fontSize: 38,
  },
  value: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  valueText: {
    fontSize: 48,
  }
});