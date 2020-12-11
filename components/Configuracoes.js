import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Dimensions, TextInput } from 'react-native';

import {MaterialCommunityIcons} from '@expo/vector-icons'

import variables from '../variables';

const {height, width} = Dimensions.get('window');

function Cores(props){
  return(
    <View style={styles.colors}>
      <TouchableOpacity style={[styles.color, {backgroundColor: variables.cores[0]}, {borderWidth: props.borda}]} onPress={(c, j) => props.colorir(0, props.j)}></TouchableOpacity>
      <TouchableOpacity style={[styles.color, {backgroundColor: variables.cores[1]}, {borderWidth: props.borda}]} onPress={(c, j) => props.colorir(1, props.j)}></TouchableOpacity>
      <TouchableOpacity style={[styles.color, {backgroundColor: variables.cores[2]}, {borderWidth: props.borda}]} onPress={(c, j) => props.colorir(2, props.j)}></TouchableOpacity> 
      <TouchableOpacity style={[styles.color, {backgroundColor: variables.cores[3]}, {borderWidth: props.borda}]} onPress={(c, j) => props.colorir(3, props.j)}></TouchableOpacity>
      <TouchableOpacity style={[styles.color, {backgroundColor: variables.cores[4]}, {borderWidth: props.borda}]} onPress={(c, j) => props.colorir(4, props.j)}></TouchableOpacity>
    </View>
  );
}

export default function Configuracoes(props) {

  const[nome1, setNome1] = useState('');
  const[nome2, setNome2] = useState('');

  variables.nomeEd1 = nome1;
  variables.nomeEd2 = nome2;

  return (
    <View style={styles.container}>
      <View style={styles.insert}>
        <View style={styles.edit}>
          <Text style={styles.text}>Nome do Time 1:</Text>
          <TextInput style={styles.input} placeholder={variables.nome1} onChangeText={text => setNome1(text)} />
        </View>
        <Cores j={1} colorir={props.colorir} borda={props.borda} />
        <View style={styles.edit}>
          <Text style={styles.text}>Nome do Time 2:</Text>
          <TextInput style={styles.input} placeholder={variables.nome2} onChangeText={text => setNome2(text)}/>
        </View>
        <Cores j={2} colorir={props.colorir} borda={props.borda} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={props.sair}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Descartar</Text>
          <MaterialCommunityIcons name="trash-can" size={24} color='white' />
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={props.salvar}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Salvar</Text>
          <MaterialCommunityIcons name="content-save" size={24} color='white' />
        </TouchableOpacity>    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        width: width*0.95,
        height: height*0.75,
        margin: 10,
        borderColor: '#848484',
        borderWidth: 2,
        borderRadius: 15
    },
    insert: {
        flex: 5,
    },
    edit: {
      flex: 5,
      padding: 20,
    },
    text: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    input: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#848484',
        borderWidth: 1,
        paddingHorizontal: 8,
    },
    colors: {
      flex: 3,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    color: {
      height: 50,
      width: 50,
      borderRadius: 50,
      borderColor: '#848484'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    button: {
        backgroundColor: '#3a6ce0',
        flexDirection: 'row',
        borderRadius: 40,
        width: 150,
        height: 50,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        alignItems: 'center',
    }
});