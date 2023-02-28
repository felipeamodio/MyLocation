import React, {useState} from 'react';
import { View, TextInput, Text, TextInputProps, TouchableOpacity } from 'react-native';
import {styles} from './styles';

interface InputProps extends TextInputProps{
    origin?: string;
    destiny?: string;
}

export default function Inputs({origin, destiny, ...props}: InputProps){
    const [textOrigin, setTextOrigin] = useState();
    const [textDestiny, setTextDestiny] = useState();

    return(
        <View style={styles.container}>
            <Text style={{color: '#fff', paddingRight: 240, paddingBottom: 9}}>Origem</Text>
            <TextInput 
                value={textOrigin}
                style={styles.input}
                onChangeText={(textOrigin) => setTextOrigin(textOrigin)}
                placeholder="Av. Barber Greene, 141 - Guarulhos, SP, 07120-260"
                placeholderTextColor={'#FFFFFF'}
            />

            <Text style={{color: '#fff', paddingRight: 240, paddingBottom: 9, marginTop: 10}}>Destino</Text>
            <TextInput 
                value={textOrigin}
                style={styles.input}
                onChangeText={(textOrigin) => setTextOrigin(textOrigin)}
                placeholder="Av. Paulo Faccini, s/n - Centro, Guarulhos - SP, 07115-260"
                placeholderTextColor={'#FFFFFF'}
            />

            <TouchableOpacity style={{marginTop: 15, backgroundColor: '#367E18', height: 53, width: 300, borderRadius: 12, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Bora</Text>
            </TouchableOpacity>
        </View>
    )
}