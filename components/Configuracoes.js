import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';

const {height, width} = Dimensions.get('window');

export default function Configuracoes(props) {

  return (

    <View style={styles.container}>
        <View style={styles.insert}>
            <View style={styles.edit}>
                <Text>Nome do Time 1:</Text>
                <TextInput />
            </View>
            <View></View>
            <View style={styles.edit}>
                <Text>Nome do Time 2:</Text>
                <TextInput />
            </View>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={props.sair}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>Sair!</Text>
            </TouchableOpacity>    
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        width: width*0.95,
        height: height*0.75,
        margin: 10,
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
    }
});