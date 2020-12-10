import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

import {MaterialCommunityIcons} from '@expo/vector-icons'

const {height, width} = Dimensions.get('window');

export default function Configuracoes(props) {

  return (

    <View style={styles.container}>
        <View style={styles.insert}>
            <View style={styles.edit}>
                <Text>Nome do Time 1:</Text>
                <TextInput style={{height: 50}} />
            </View>
            <View></View>
            <View style={styles.edit}>
                <Text>Nome do Time 2:</Text>
                <TextInput style={{height: 50}} />
            </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={props.sair}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Descartar</Text>
                <MaterialCommunityIcons name="trash-can" size={24} color='white' />
            </TouchableOpacity> 
            <TouchableOpacity style={styles.button} onPress={props.sair}>
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
        backgroundColor: '#a6a6a6',
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
        padding: 20,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    button: {
        backgroundColor: 'blue',
        flexDirection: 'row',
        borderRadius: 40,
        width: 150,
        height: 50,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        alignItems: 'center',
    }
});